import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/config/prisma.service';
import { FilesService } from '@/files/files.service';

@Injectable()
export class ProductsService {
  constructor(
    private prisma: PrismaService,
    private filesService: FilesService,
  ) {}

  async findAll() {
    return this.prisma.product.findMany({
      where: { isActive: true },
      include: { category: true },
    });
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
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
      description?: string;
      brand?: string;
      categoryId?: number;
      minStock?: number;
      imageUrl?: string | null;
      unitsPerBox?: number | null;
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

    // Limpiar undefined para evitar errores con Prisma
    const cleanData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined),
    );

    return this.prisma.product.update({
      where: { id },
      data: cleanData,
      include: { category: true },
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
      include: { category: true },
    });
  }

  async remove(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    // Eliminar imagen física
    if (product.imageUrl) {
      this.filesService.removeFile(product.imageUrl);
    }

    // Soft delete
    return this.prisma.product.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
