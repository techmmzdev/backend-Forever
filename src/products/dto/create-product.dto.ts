import { IsString, IsNotEmpty, IsInt, IsOptional, Min, ValidateNested, ArrayMaxSize } from 'class-validator';
import { Type } from 'class-transformer';

class ColorDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre del color no puede estar vacío' })
  name!: string;

  @IsString()
  @IsOptional()
  hexCode?: string;
}

export class CreateProductDto {
  @IsString()
  @IsNotEmpty({ message: 'El SKU no puede estar vacío' })
  sku!: string;

  @IsString()
  @IsNotEmpty({ message: 'El alias no puede estar vacío' })
  alias!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  brand?: string;

  @IsInt({ message: 'El categoryId debe ser un número entero' })
  categoryId!: number;

  @IsInt()
  @IsOptional()
  @Min(0, { message: 'El stock no puede ser negativo' })
  currentStock?: number;

  @IsInt()
  @IsOptional()
  @Min(0)
  minStock?: number;

  @IsInt()
  @IsOptional()
  @Min(1)
  unitsPerBox?: number;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ColorDto)
  @ArrayMaxSize(50)
  colors?: ColorDto[];
}
