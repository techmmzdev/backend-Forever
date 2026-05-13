import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/config/prisma.service';

@Injectable()
export class MovementsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.movement.findMany({
      include: {
        product: true,
        user: {
          select: { id: true, username: true, role: true },
        },
        colors: {
          include: { productColor: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByProduct(productId: number) {
    return this.prisma.movement.findMany({
      where: { productId },
      include: {
        product: true,
        user: {
          select: { id: true, username: true, role: true },
        },
        colors: {
          include: { productColor: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(data: {
    productId: number;
    userId: number;
    type: 'INGRESO' | 'SALIDA';
    quantity: number;
    observations?: string;
    receivedBy?: string;
    colors?: { productColorId: number; quantity: number }[];
  }) {
    const product = await this.prisma.product.findUnique({
      where: { id: data.productId },
      include: { colors: true },
    });
    if (!product) throw new NotFoundException('Producto no encontrado');

    // Si el producto tiene colores y no se especifican, error
    // Si no tiene colores, funciona como antes
    if (product.colors.length > 0 && (!data.colors || data.colors.length === 0)) {
      throw new BadRequestException(
        'Este producto tiene colores. Debes especificar la distribución.',
      );
    }

    const movementColors = data.colors;
    if (movementColors && movementColors.length > 0) {
      return this.createWithColors(product, { ...data, colors: movementColors });
    }

    // ─── Sin colores (comportamiento original) ──────────────
    const newStock =
      data.type === 'INGRESO'
        ? product.currentStock + data.quantity
        : product.currentStock - data.quantity;

    if (newStock < 0) {
      throw new Error('Stock insuficiente para realizar la salida');
    }

    const [movement] = await this.prisma.$transaction([
      this.prisma.movement.create({
        data: {
          productId: data.productId,
          userId: data.userId,
          type: data.type,
          quantity: data.quantity,
          observations: data.observations,
          receivedBy: data.receivedBy,
        },
        include: {
          product: true,
          user: { select: { id: true, username: true, role: true } },
        },
      }),
      this.prisma.product.update({
        where: { id: data.productId },
        data: { currentStock: newStock },
      }),
    ]);

    return movement;
  }

  async voidMovement(id: number, userId: number) {
    const original = await this.prisma.movement.findUnique({
      where: { id },
      include: {
        product: { include: { colors: true } },
        colors: { include: { productColor: true } },
      },
    });

    if (!original) {
      throw new NotFoundException('Movimiento no encontrado');
    }

    const voidType = original.type === 'INGRESO' ? 'SALIDA' : 'INGRESO';
    const observation = `Anulación de movimiento #${original.id}`;
    const qty = original.quantity;

    // Con colores
    if (original.colors.length > 0) {
      // Validar stock suficiente si se va a crear una SALIDA
      if (voidType === 'SALIDA') {
        for (const mc of original.colors) {
          const colorStock = original.product.colors.find(
            (pc) => pc.id === mc.productColorId,
          )?.currentStock ?? 0;
          if (colorStock < mc.quantity) {
            throw new BadRequestException(
              `Stock insuficiente en color "${mc.productColor.name}" para anular esta entrada`,
            );
          }
        }
        if (original.product.currentStock < qty) {
          throw new BadRequestException(
            'Stock insuficiente para anular el movimiento',
          );
        }
      }

      const product = original.product;
      const colorUpdates = product.colors.map((pc) => {
        const originalMc = original.colors.find(
          (mc) => mc.productColorId === pc.id,
        );
        const delta = originalMc?.quantity ?? 0;
        const newStock =
          voidType === 'INGRESO'
            ? pc.currentStock + delta
            : pc.currentStock - delta;
        return { id: pc.id, newStock };
      });

      const totalQty = original.colors.reduce(
        (sum, mc) => sum + mc.quantity,
        0,
      );
      const productNewStock =
        voidType === 'INGRESO'
          ? product.currentStock + totalQty
          : product.currentStock - totalQty;

      const operations = [
        this.prisma.movement.create({
          data: {
            productId: original.productId,
            userId,
            type: voidType,
            quantity: totalQty,
            observations: observation,
            colors: {
              create: original.colors.map((mc) => ({
                productColorId: mc.productColorId,
                quantity: mc.quantity,
              })),
            },
          },
          include: {
            product: true,
            user: { select: { id: true, username: true, role: true } },
            colors: { include: { productColor: true } },
          },
        }),
        ...colorUpdates.map((cu) =>
          this.prisma.productColor.update({
            where: { id: cu.id },
            data: { currentStock: cu.newStock },
          }),
        ),
        this.prisma.product.update({
          where: { id: product.id },
          data: { currentStock: productNewStock },
        }),
      ];

      const [movement] = await this.prisma.$transaction(operations);
      return movement;
    }

    // Sin colores
    if (voidType === 'SALIDA' && original.product.currentStock < qty) {
      throw new BadRequestException(
        'Stock insuficiente para anular el movimiento',
      );
    }

    const newStock =
      voidType === 'INGRESO'
        ? original.product.currentStock + qty
        : original.product.currentStock - qty;

    const [movement] = await this.prisma.$transaction([
      this.prisma.movement.create({
        data: {
          productId: original.productId,
          userId,
          type: voidType,
          quantity: qty,
          observations: observation,
        },
        include: {
          product: true,
          user: { select: { id: true, username: true, role: true } },
        },
      }),
      this.prisma.product.update({
        where: { id: original.productId },
        data: { currentStock: newStock },
      }),
    ]);

    return movement;
  }

  async update(
    id: number,
    data: { observations?: string; receivedBy?: string },
  ) {
    const movement = await this.prisma.movement.findUnique({
      where: { id },
    });

    if (!movement) {
      throw new NotFoundException('Movimiento no encontrado');
    }

    return this.prisma.movement.update({
      where: { id },
      data: {
        ...(data.observations !== undefined ? { observations: data.observations } : {}),
        ...(data.receivedBy !== undefined ? { receivedBy: data.receivedBy } : {}),
      },
      include: {
        product: true,
        user: { select: { id: true, username: true, role: true } },
        colors: { include: { productColor: true } },
      },
    });
  }

  private async createWithColors(
    product: { id: number; currentStock: number; colors: { id: number; currentStock: number }[] },
    data: {
      productId: number;
      userId: number;
      type: 'INGRESO' | 'SALIDA';
      quantity: number;
      observations?: string;
      receivedBy?: string;
      colors: { productColorId: number; quantity: number }[];
    },
  ) {
    // Validar que todos los colorId pertenezcan al producto
    for (const c of data.colors) {
      const match = product.colors.find((pc) => pc.id === c.productColorId);
      if (!match) {
        throw new BadRequestException(
          `El color ${c.productColorId} no pertenece a este producto`,
        );
      }
    }

    // Calcular nuevo stock por color y validar SALIDA
    const colorUpdates = product.colors.map((pc) => {
      const input = data.colors.find((c) => c.productColorId === pc.id);
      const qty = input?.quantity ?? 0;

      const newStock =
        data.type === 'INGRESO'
          ? pc.currentStock + qty
          : pc.currentStock - qty;

      if (newStock < 0) {
        throw new Error(
          `Stock insuficiente para el color seleccionado`,
        );
      }

      return { id: pc.id, newStock };
    });

    // Calcular total del producto
    const totalQty = data.colors.reduce((sum, c) => sum + c.quantity, 0);
    const productNewStock =
      data.type === 'INGRESO'
        ? product.currentStock + totalQty
        : product.currentStock - totalQty;

    if (productNewStock < 0) {
      throw new Error('Stock insuficiente para realizar la salida');
    }

    // Transacción: movimiento + colors + stock
    const operations = [
      this.prisma.movement.create({
        data: {
          productId: data.productId,
          userId: data.userId,
          type: data.type,
          quantity: totalQty,
          observations: data.observations,
          receivedBy: data.receivedBy,
          colors: {
            create: data.colors.map((c) => ({
              productColorId: c.productColorId,
              quantity: c.quantity,
            })),
          },
        },
        include: {
          product: true,
          user: { select: { id: true, username: true, role: true } },
          colors: { include: { productColor: true } },
        },
      }),
      ...colorUpdates.map((cu) =>
        this.prisma.productColor.update({
          where: { id: cu.id },
          data: { currentStock: cu.newStock },
        }),
      ),
      this.prisma.product.update({
        where: { id: data.productId },
        data: { currentStock: productNewStock },
      }),
    ];

    const [movement] = await this.prisma.$transaction(operations);
    return movement;
  }
}
