import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
import * as crypto from 'node:crypto';

import { UsersService } from '@/users/users.service';
import { PrismaService } from '@/config/prisma.service';
import { MailService } from '@/mail/mail.service';

import { UserRole } from './auth.types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
    private mailService: MailService,
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

  async requestPasswordReset(email: string) {
    const user = await this.usersService.findByEmail(email);

    const genericMsg =
      'Si el correo existe, recibirás un enlace de recuperación';

    if (!user || !user.isActive) {
      return { message: genericMsg };
    }

    await this.prisma.passwordResetToken.updateMany({
      where: { email, usedAt: null, expiresAt: { gt: new Date() } },
      data: { usedAt: new Date() },
    });

    const rawToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto
      .createHash('sha256')
      .update(rawToken)
      .digest('hex');

    await this.prisma.passwordResetToken.create({
      data: {
        email,
        token: hashedToken,
        expiresAt: new Date(Date.now() + 3600000),
      },
    });

    this.mailService.sendPasswordReset(email, rawToken).catch((err) => {
      console.error('Error enviando email de recuperación:', err);
    });

    return { message: genericMsg };
  }

  async resetPassword(token: string, newPassword: string) {
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const record = await this.prisma.passwordResetToken.findFirst({
      where: {
        token: hashedToken,
        usedAt: null,
        expiresAt: { gt: new Date() },
      },
    });

    if (!record) {
      throw new BadRequestException('Token inválido o expirado');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await this.prisma.user.update({
      where: { email: record.email },
      data: { password: hashedPassword },
    });

    await this.prisma.passwordResetToken.update({
      where: { id: record.id },
      data: { usedAt: new Date() },
    });

    this.mailService.sendPasswordResetConfirmation(record.email).catch((err) => {
      console.error('Error enviando confirmación:', err);
    });

    return { message: 'Contraseña actualizada correctamente' };
  }

  async updateProfile(
    userId: number,
    data: { username?: string; email?: string; password?: string },
  ) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    if (data.username && data.username !== user.username) {
      const existing = await this.usersService.findByUsername(data.username);
      if (existing) {
        throw new ConflictException('El nombre de usuario ya está en uso');
      }
    }

    if (data.email && data.email !== user.email) {
      const existing = await this.usersService.findByEmail(data.email);
      if (existing) {
        throw new ConflictException('El correo ya está registrado');
      }
    }

    const updateData: {
      username?: string;
      email?: string;
      password?: string;
    } = {};

    if (data.username) updateData.username = data.username;
    if (data.email) updateData.email = data.email;
    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    const updated = await this.prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: { id: true, username: true, email: true, role: true },
    });

    const permissions = await this.getPermissionsForRole(updated.role);

    const payload = {
      sub: updated.id,
      username: updated.username,
      email: updated.email,
      role: updated.role,
      permissions,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: { ...updated, permissions },
    };
  }

  private async getPermissionsForRole(role: UserRole): Promise<string[]> {
    const rows = await this.prisma.rolePermission.findMany({
      where: { role },
      select: { permission: true },
    });
    return rows.map((r: { permission: string }) => r.permission);
  }
}
