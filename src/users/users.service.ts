import { PrismaService } from '@/config/prisma.service';
import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@generated/prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findAll(includeInactive?: boolean) {
    return this.prisma.user.findMany({
      where: includeInactive ? {} : { isActive: true },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
      orderBy: { id: 'desc' },
    });
  }

  async create(
    username: string,
    email: string,
    hashedPassword: string,
    role: 'ADMIN' | 'STAFF',
  ) {
    return this.prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role,
        isActive: true,
      },
    });
  }

  async update(
    id: number,
    data: {
      username?: string;
      email?: string;
      password?: string;
      role?: 'ADMIN' | 'STAFF';
    },
  ) {
    try {
      return await this.prisma.user.update({
        where: { id },
        data,
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
          isActive: true,
          createdAt: true,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        const field = (error.meta?.target as string[])?.[0] ?? 'campo';
        throw new ConflictException(
          `El ${field === 'username' ? 'nombre de usuario' : 'correo'} ya está en uso`,
        );
      }
      throw error;
    }
  }

  async delete(id: number, currentUserId: number) {
    if (id === currentUserId) {
      throw new ForbiddenException(
        'No puedes eliminar tu propia cuenta de administrador.',
      );
    }

    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado.');
    }

    if (user.role === 'ADMIN') {
      const adminCount = await this.prisma.user.count({
        where: { role: 'ADMIN', isActive: true },
      });
      if (adminCount <= 1) {
        throw new ForbiddenException(
          'No se puede eliminar al último administrador del sistema.',
        );
      }
    }

    // Soft delete
    return this.prisma.user.update({
      where: { id },
      data: { isActive: false },
    });
  }

  async restore(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado.');
    }

    return this.prisma.user.update({
      where: { id },
      data: { isActive: true },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });
  }
}
