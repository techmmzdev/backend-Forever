import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/config/prisma.service';

@Injectable()
export class MovementsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.movement.findMany({
      include: { product: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByProduct(productId: number) {
    return this.prisma.movement.findMany({
      where: { productId },
      include: { product: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(data: {
    productId: number;
    type: 'INGRESO' | 'SALIDA';
    quantity: number;
    observations?: string;
    staffName: string;
    receivedBy?: string;
  }) {
    const product = await this.prisma.product.findUnique({
      where: { id: data.productId },
    });
    if (!product) throw new NotFoundException('Producto no encontrado');

    const newStock =
      data.type === 'INGRESO'
        ? product.currentStock + data.quantity
        : product.currentStock - data.quantity;

    if (newStock < 0) {
      throw new Error('Stock insuficiente para realizar la salida');
    }

    await this.prisma.$transaction([
      this.prisma.movement.create({ data }),
      this.prisma.product.update({
        where: { id: data.productId },
        data: { currentStock: newStock },
      }),
    ]);

    return this.prisma.movement.findFirst({
      where: { productId: data.productId },
      include: { product: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}
