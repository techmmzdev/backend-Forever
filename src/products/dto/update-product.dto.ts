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

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  sku?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  alias?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  brand?: string;

  @IsInt()
  @IsOptional()
  categoryId?: number;

  @IsInt()
  @IsOptional()
  @Min(0)
  minStock?: number;

  @IsOptional()
  imageUrl?: string | null;

  @IsOptional()
  unitsPerBox?: number | null;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ColorDto)
  @ArrayMaxSize(50)
  colors?: ColorDto[];
}
