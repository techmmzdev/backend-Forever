import { Injectable, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/config/prisma.service';
import { FilesService } from '@/files/files.service';

@Injectable()
export class ProductsService {
  constructor(
    private prisma: PrismaService,
    private filesService: FilesService,
  ) {}

  async findAll(includeInactive?: boolean) {
    return this.prisma.product.findMany({
      where: includeInactive ? {} : { isActive: true },
      include: { category: true, colors: true },
    });
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { category: true, colors: true },
    });

    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    return product;
  }

  async create(data: {
    sku: string;
    alias: string;
    description?: string;
    brand?: string;
    categoryId: number;
    currentStock?: number;
    minStock?: number;
    imageUrl?: string;
    unitsPerBox?: number;
    colors?: { name: string; hexCode?: string }[];
  }) {
    const { colors, ...productData } = data;

    let colorPayload = undefined;
    if (colors && colors.length > 0) {
      const stock = productData.currentStock ?? 0;
      if (stock < colors.length) {
        throw new BadRequestException(
          `Stock (${stock}) debe ser mayor o igual a la cantidad de colores (${colors.length})`,
        );
      }
      const base = Math.floor(stock / colors.length);
      const resto = stock - base * colors.length;
      colorPayload = colors.map((c, i) => ({
        name: c.name,
        hexCode: c.hexCode ?? null,
        currentStock: base + (i < resto ? 1 : 0),
      }));
    }

    return this.prisma.product.create({
      data: {
        ...productData,
        currentStock: productData.currentStock ?? 0,
        ...(colorPayload ? { colors: { create: colorPayload } } : {}),
      },
      include: { category: true, colors: true },
    });
  }

  async update(
    id: number,
    data: {
      sku?: string;
      alias?: string;
      description?: string;
      brand?: string;
      categoryId?: number;
      minStock?: number;
      imageUrl?: string | null;
      unitsPerBox?: number | null;
      colors?: { name: string; hexCode?: string }[];
    },
  ) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    // Si se elimina imagen
    if (data.imageUrl === null && product.imageUrl) {
      this.filesService.removeFile(product.imageUrl);
    }

    // Manejar colores: reemplazar completamente
    const { colors, ...rest } = data;

    const cleanData = Object.fromEntries(
      Object.entries(rest).filter(([_, v]) => v !== undefined),
    );

    let colorsPayload: any = undefined;
    if (colors !== undefined) {
      if (colors.length > 0 && product.currentStock < colors.length) {
        throw new BadRequestException(
          `Stock (${product.currentStock}) debe ser mayor o igual a la cantidad de colores (${colors.length})`,
        );
      }
      const base =
        colors.length > 0
          ? Math.floor(product.currentStock / colors.length)
          : 0;
      const resto = product.currentStock - base * colors.length;
      colorsPayload = {
        deleteMany: {},
        create: colors.map((c, i) => ({
          name: c.name,
          hexCode: c.hexCode ?? null,
          currentStock: base + (i < resto ? 1 : 0),
        })),
      };
    }

    return this.prisma.product.update({
      where: { id },
      data: {
        ...cleanData,
        ...(colors !== undefined ? { colors: colorsPayload } : {}),
      },
      include: { category: true, colors: true },
    });
  }

  async updateImage(id: number, imageUrl: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    // Eliminar imagen anterior
    if (product.imageUrl) {
      this.filesService.removeFile(product.imageUrl);
    }

    return this.prisma.product.update({
      where: { id },
      data: { imageUrl },
      include: { category: true, colors: true },
    });
  }

  async remove(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    // Soft delete (conserva imagen para posible restauración)
    return this.prisma.product.update({
      where: { id },
      data: { isActive: false },
    });
  }

  async restore(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    return this.prisma.product.update({
      where: { id },
      data: { isActive: true },
      include: { category: true, colors: true },
    });
  }

  // ─── Colores ────────────────────────────────────────────

  async findColors(productId: number) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) throw new NotFoundException('Producto no encontrado');

    return this.prisma.productColor.findMany({
      where: { productId },
      orderBy: { name: 'asc' },
    });
  }

  async addColor(
    productId: number,
    data: { name: string; hexCode?: string },
  ) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) throw new NotFoundException('Producto no encontrado');

    const existing = await this.prisma.productColor.findUnique({
      where: { productId_name: { productId, name: data.name } },
    });
    if (existing) {
      throw new ConflictException('El color ya existe para este producto');
    }

    return this.prisma.productColor.create({
      data: { productId, name: data.name, hexCode: data.hexCode ?? null },
    });
  }

  async updateColor(
    colorId: number,
    data: { name: string; hexCode?: string },
  ) {
    const color = await this.prisma.productColor.findUnique({
      where: { id: colorId },
    });
    if (!color) throw new NotFoundException('Color no encontrado');

    return this.prisma.productColor.update({
      where: { id: colorId },
      data: { name: data.name, hexCode: data.hexCode ?? null },
    });
  }

  async removeColor(colorId: number) {
    const color = await this.prisma.productColor.findUnique({
      where: { id: colorId },
    });
    if (!color) throw new NotFoundException('Color no encontrado');

    if (color.currentStock > 0) {
      throw new BadRequestException(
        'No se puede eliminar un color con stock. Debe estar en 0.',
      );
    }

    return this.prisma.productColor.delete({ where: { id: colorId } });
  }
}
