import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/config/prisma.service';
import * as fs from 'fs';
import * as path from 'path';

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
    imageUrl?: string;
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
      imageUrl?: string;
    },
  ) {
    return this.prisma.product.update({
      where: { id },
      data,
      include: { category: true },
    });
  }

  async updateImage(id: number, imageUrl: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Producto no encontrado');

    // Eliminar imagen anterior si existe
    if (product.imageUrl) {
      const oldPath = path.join(
        process.cwd(),
        'uploads',
        path.basename(product.imageUrl),
      );
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    }

    return this.prisma.product.update({
      where: { id },
      data: { imageUrl },
      include: { category: true },
    });
  }

  async remove(id: number) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Producto no encontrado');

    // Eliminar imagen si existe
    if (product.imageUrl) {
      const filePath = path.join(
        process.cwd(),
        'uploads',
        path.basename(product.imageUrl),
      );
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    // Eliminar movimientos relacionados primero, luego el producto
    await this.prisma.$transaction([
      this.prisma.movement.deleteMany({ where: { productId: id } }),
      this.prisma.product.delete({ where: { id } }),
    ]);

    return { message: 'Producto eliminado correctamente' };
  }
}
