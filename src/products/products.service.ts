import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/config/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.product.findMany({
      include: { category: true },
    });
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });
    if (!product) throw new NotFoundException('Producto no encontrado');
    return product;
  }

  async create(data: {
    sku: string;
    alias: string;
    brand?: string;
    categoryId: number;
    currentStock?: number;
  }) {
    return this.prisma.product.create({
      data,
      include: { category: true },
    });
  }

  async update(
    id: number,
    data: {
      sku?: string;
      alias?: string;
      brand?: string;
      categoryId?: number;
    },
  ) {
    return this.prisma.product.update({
      where: { id },
      data,
      include: { category: true },
    });
  }

  async remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
