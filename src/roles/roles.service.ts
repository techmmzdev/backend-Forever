import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/config/prisma.service';
import { UserRole } from '@generated/prisma/enums';

export const AVAILABLE_PERMISSIONS = [
  'dashboard',
  'categories',
  'products',
  'movements',
  'users',
  'permissions',
] as const;

export type Permission = (typeof AVAILABLE_PERMISSIONS)[number];

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  async getPermissions(role: UserRole) {
    const rows = await this.prisma.rolePermission.findMany({
      where: { role },
      select: { permission: true },
    });
    return rows.map((r) => r.permission);
  }

  async updatePermissions(role: UserRole, permissions: string[]) {
    await this.prisma.$transaction([
      this.prisma.rolePermission.deleteMany({ where: { role } }),
      this.prisma.rolePermission.createMany({
        data: permissions.map((p) => ({ role, permission: p })),
      }),
    ]);
    return this.getPermissions(role);
  }
}
