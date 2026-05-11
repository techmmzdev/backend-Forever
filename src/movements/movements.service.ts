import { Injectable, NotFoundException } from '@nestjs/common';
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

    const [movement] = await this.prisma.$transaction([
      this.prisma.movement.create({
        data,
        include: {
          product: true,
          user: {
            select: { id: true, username: true, role: true },
          },
        },
      }),
      this.prisma.product.update({
        where: { id: data.productId },
        data: { currentStock: newStock },
      }),
    ]);

    return movement;
  }
}
