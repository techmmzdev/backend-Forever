import { IsString, IsNotEmpty, IsInt, IsOptional } from 'class-validator';

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
  brand?: string;

  @IsInt()
  @IsOptional()
  categoryId?: number;
}
