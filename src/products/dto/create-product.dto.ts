import { IsString, IsNotEmpty, IsInt, IsOptional, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty({ message: 'El SKU no puede estar vacío' })
  sku!: string;

  @IsString()
  @IsNotEmpty({ message: 'El alias no puede estar vacío' })
  alias!: string;

  @IsString()
  @IsOptional()
  brand?: string;

  @IsInt({ message: 'El categoryId debe ser un número entero' })
  categoryId!: number;

  @IsInt()
  @IsOptional()
  @Min(0, { message: 'El stock no puede ser negativo' })
  currentStock?: number;
}
