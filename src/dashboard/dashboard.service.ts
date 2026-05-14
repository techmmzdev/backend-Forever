import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/config/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getStats() {
    const [
      totalProducts,
      totalCategories,
      totalUsers,
      allProducts,
      recentMovements,
    ] = await Promise.all([
      this.prisma.product.count({ where: { isActive: true } }),
      this.prisma.category.count({ where: { isActive: true } }),
      this.prisma.user.count({ where: { isActive: true } }),
      this.prisma.product.findMany({
        where: { isActive: true },
        select: {
          id: true,
          sku: true,
          alias: true,
          currentStock: true,
          minStock: true,
          imageUrl: true,
        },
      }),
      this.prisma.movement.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          type: true,
          quantity: true,
          createdAt: true,
          product: { select: { alias: true } },
          user: { select: { username: true } },
        },
      }),
    ]);

    const lowStockItems = allProducts.filter(
      (p) => p.currentStock <= (p.minStock ?? 5),
    );

    return {
      totalProducts,
      totalCategories,
      totalUsers,
      lowStockCount: lowStockItems.length,
      lowStockItems,
      recentMovements,
    };
  }
}
