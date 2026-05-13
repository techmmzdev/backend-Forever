import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
  Req,
  ForbiddenException,
  Query,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { UsersService } from './users.service';

import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { RolesGuard } from '@/auth/roles.guard';
import { Roles } from '@/auth/roles.decorator';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

interface RequestWithUser extends Request {
  user: {
    id: number;
    username: string;
    email: string;
    role: string;
  };
}

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Roles('ADMIN')
  @Get()
  findAll(@Query('includeInactive') includeInactive?: string) {
    return this.usersService.findAll(includeInactive === 'true');
  }

  @Roles('ADMIN')
  @Post()
  async create(
    @Body()
    body: CreateUserDto,
  ) {
    const hashedPassword = await bcrypt.hash(body.password, 10);

    return this.usersService.create(
      body.username,
      body.email,
      hashedPassword,
      body.role,
    );
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDto,
    @Req() req: RequestWithUser,
  ) {
    const currentUserId = req.user.id;
    const isAdmin = req.user.role === 'ADMIN';

    if (!isAdmin && id !== currentUserId) {
      throw new ForbiddenException(
        'No tienes permiso para editar otros perfiles.',
      );
    }

    if (id === currentUserId && body.role && body.role !== 'ADMIN' && isAdmin) {
      throw new ForbiddenException(
        'No puedes cambiar tu propio rol. Pide a otro administrador que lo haga.',
      );
    }

    // Definimos el tipo explícitamente en lugar de 'any'
    // Esto coincide con el parámetro que espera usersService.update
    const data: {
      username?: string;
      password?: string;
      role?: 'ADMIN' | 'STAFF';
    } = {
      username: body.username,
    };

    // Solo asignamos el rol si el usuario es Admin y el rol viene en el body
    if (isAdmin && body.role) {
      data.role = body.role;
    }

    if (body.password) {
      data.password = await bcrypt.hash(body.password, 10);
    }

    // Ahora TS sabe que 'data' es seguro y el error desaparece
    return this.usersService.update(id, data);
  }

  @Roles('ADMIN')
  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: RequestWithUser,
  ) {
    const currentUserId = req.user.id;
    return this.usersService.delete(id, currentUserId);
  }

  @Roles('ADMIN')
  @Put(':id/restore')
  restore(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.restore(id);
  }
}
