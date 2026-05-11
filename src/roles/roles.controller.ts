import { Controller, Get, Put, Param, Body, UseGuards } from '@nestjs/common';
import { RolesService, AVAILABLE_PERMISSIONS } from './roles.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { RolesGuard } from '@/auth/roles.guard';
import { Roles } from '@/auth/roles.decorator';
import { UserRole } from '@generated/prisma/enums';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get('permissions')
  getAvailablePermissions() {
    return AVAILABLE_PERMISSIONS;
  }

  @Roles('ADMIN')
  @Get(':role/permissions')
  async getRolePermissions(@Param('role') role: UserRole) {
    const permissions = await this.rolesService.getPermissions(role);
    return { role, permissions };
  }

  @Roles('ADMIN')
  @Put(':role/permissions')
  async updateRolePermissions(
    @Param('role') role: UserRole,
    @Body() body: { permissions: string[] },
  ) {
    const permissions = await this.rolesService.updatePermissions(role, body.permissions);
    return { role, permissions };
  }
}
