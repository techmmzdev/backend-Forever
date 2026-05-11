import { IsString, IsNotEmpty, IsInt, IsOptional, Min } from 'class-validator';

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
}
