import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { UsersService } from '@/users/users.service';
import { PrismaService } from '@/config/prisma.service';

import { UserRole } from './auth.types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async register(
    username: string,
    email: string,
    password: string,
    role: UserRole,
  ) {
    const existingUser = await this.usersService.findByEmail(email);

    if (existingUser) {
      throw new ConflictException('El correo ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersService.create(
      username,
      email,
      hashedPassword,
      role,
    );

    return {
      message: 'Usuario registrado correctamente',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    };
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Usuario inactivo');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const permissions = await this.getPermissionsForRole(user.role);

    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      permissions,
    };

    return {
      access_token: this.jwtService.sign(payload),

      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        permissions,
      },
    };
  }

  async me(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, username: true, email: true, role: true },
    });
    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }
    const permissions = await this.getPermissionsForRole(user.role);
    return { ...user, permissions };
  }

  private async getPermissionsForRole(role: UserRole): Promise<string[]> {
    const rows = await this.prisma.rolePermission.findMany({
      where: { role },
      select: { permission: true },
    });
    return rows.map((r: { permission: string }) => r.permission);
  }
}
