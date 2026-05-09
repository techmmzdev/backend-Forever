import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsEnum,
  IsOptional,
  Min,
} from 'class-validator';

export class CreateMovementDto {
  @IsInt({ message: 'El productId debe ser un número entero' })
  productId!: number;

  @IsEnum(['INGRESO', 'SALIDA'], {
    message: 'El tipo debe ser INGRESO o SALIDA',
  })
  type!: 'INGRESO' | 'SALIDA';

  @IsInt()
  @Min(1, { message: 'La cantidad debe ser mínimo 1' })
  quantity!: number;

  @IsString()
  @IsOptional()
  observations?: string;

  @IsString()
  @IsNotEmpty({ message: 'El nombre del staff no puede estar vacío' })
  staffName!: string;

  @IsString()
  @IsOptional()
  receivedBy?: string;
}
