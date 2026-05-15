import {
  Controller,
  Param,
  Get,
  Post,
  Put,
  Delete,
  Body,
  ParseIntPipe,
  Query,
  UseGuards,
  BadRequestException,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { ProductsService } from './products.service';
import { FilesService } from '@/files/files.service';

import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { RolesGuard } from '@/auth/roles.guard';
import { Roles } from '@/auth/roles.decorator';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateColorDto } from './dto/create-color.dto';

import { multerConfig } from '@/files/multer.config';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    private filesService: FilesService,
  ) {}

  @Get()
  findAll(@Query('includeInactive') includeInactive?: string) {
    return this.productsService.findAll(includeInactive === 'true');
  }

  @Get('search')
  search(@Query('q') query: string) {
    return this.productsService.search(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Roles('ADMIN')
  @Post()
  create(@Body() body: CreateProductDto) {
    return this.productsService.create(body);
  }

  @Roles('ADMIN')
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProductDto,
  ) {
    return this.productsService.update(id, body);
  }

  @Roles('ADMIN')
  @Post(':id/image')
  @UseInterceptors(FileInterceptor('image', multerConfig))
  async uploadImage(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('No se subió ninguna imagen');
    }

    const result = await this.filesService.handleUploadedFile(file);

    return this.productsService.updateImage(id, result.path);
  }

  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }

  @Roles('ADMIN')
  @Put(':id/restore')
  restore(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.restore(id);
  }

  // ─── Colores ────────────────────────────────────────────

  @Get(':id/colors')
  findColors(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findColors(id);
  }

  @Roles('ADMIN')
  @Post(':id/colors')
  addColor(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateColorDto,
  ) {
    return this.productsService.addColor(id, body);
  }

  @Roles('ADMIN')
  @Put('colors/:colorId')
  updateColor(
    @Param('colorId', ParseIntPipe) colorId: number,
    @Body() body: CreateColorDto,
  ) {
    return this.productsService.updateColor(colorId, body);
  }

  @Roles('ADMIN')
  @Delete('colors/:colorId')
  removeColor(@Param('colorId', ParseIntPipe) colorId: number) {
    return this.productsService.removeColor(colorId);
  }
}
