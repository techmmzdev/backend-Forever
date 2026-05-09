import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { MovementsService } from './movements.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { RolesGuard } from '@/auth/roles.guard';
import { Roles } from '@/auth/roles.decorator';
import { CreateMovementDto } from './dto/create-movement.dto';

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
  create(
    @Body()
    body: CreateMovementDto,
  ) {
    return this.movementsService.create(body);
  }
}
