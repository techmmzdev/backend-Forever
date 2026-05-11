import { PrismaService } from '@/config/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.category.findMany({
      where: { isActive: true },
      include: { products: false },
    });
  }

  async findOne(id: number) {
    const category = await this.prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException('Categoría no encontrada');
    }

    return category;
  }

  async create(name: string, description?: string) {
    return this.prisma.category.create({
      data: { name, description },
    });
  }

  async update(id: number, name: string, description?: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });

    if (!category) {
      throw new NotFoundException('Categoría no encontrada');
    }

    return this.prisma.category.update({
      where: { id },
      data: { name, description },
    });
  }

  async remove(id: number) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) throw new NotFoundException('Categoría no encontrada');

    // Soft delete
    return this.prisma.category.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
