import { PrismaService } from '@/config/prisma.service';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        username: true,
        role: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async create(
    username: string,
    hashedPassword: string,
    role: 'ADMIN' | 'STAFF',
  ) {
    return this.prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        role,
      },
    });
  }

  async update(
    id: number,
    data: {
      username?: string;
      password?: string;
      role?: 'ADMIN' | 'STAFF';
    },
  ) {
    const updateData = { ...data };

    // SI VIENE CONTRASEÑA, LA ENCRIPTAMOS
    // if (updateData.password) {
    //   const salt = await bcrypt.genSalt();
    //   updateData.password = await bcrypt.hash(updateData.password, salt);
    // }

    return this.prisma.user.update({
      where: { id },
      data: updateData, // Usamos la data procesada
    });
  }

  async delete(id: number, currentUserId: number) {
    // 1. Evitar que se elimine a sí mismo
    if (id === currentUserId) {
      throw new ForbiddenException(
        'No puedes eliminar tu propia cuenta de administrador.',
      );
    }

    // 2. Verificar si el usuario existe antes de borrar
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado.');
    }

    // 3. (Opcional) Evitar eliminar al último ADMIN
    if (user.role === 'ADMIN') {
      const adminCount = await this.prisma.user.count({
        where: { role: 'ADMIN' },
      });
      if (adminCount <= 1) {
        throw new ForbiddenException(
          'No se puede eliminar al último administrador del sistema.',
        );
      }
    }

    return this.prisma.user.delete({
      where: { id },
    });
  }
}
