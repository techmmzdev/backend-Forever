import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  UseGuards,
  ParseIntPipe,
  Request,
} from '@nestjs/common';

import { MovementsService } from './movements.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { RolesGuard } from '@/auth/roles.guard';
import { Roles } from '@/auth/roles.decorator';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';

interface AuthRequest extends Request {
  user: { id: number; username: string; role: 'ADMIN' | 'STAFF' };
}

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('movements')
export class MovementsController {
  constructor(private movementsService: MovementsService) {}

  @Get()
  findAll() {
    return this.movementsService.findAll();
  }

  @Get('product/:productId')
  findByProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.movementsService.findByProduct(productId);
  }

  @Roles('ADMIN', 'STAFF')
  @Post()
  create(@Body() body: CreateMovementDto, @Request() req: AuthRequest) {
    return this.movementsService.create({
      ...body,
      userId: req.user.id,
    });
  }

  @Roles('ADMIN', 'STAFF')
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateMovementDto,
  ) {
    return this.movementsService.update(id, body);
  }

  @Roles('ADMIN', 'STAFF')
  @Post(':id/void')
  voidMovement(
    @Param('id', ParseIntPipe) id: number,
    @Request() req: AuthRequest,
  ) {
    return this.movementsService.voidMovement(id, req.user.id);
  }
}
