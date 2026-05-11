import { IsString, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  @MinLength(2, { message: 'El nombre debe tener mínimo 2 caracteres' })
  name!: string;

  @IsString()
  @IsOptional()
  description?: string;
}
