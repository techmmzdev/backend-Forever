import { IsInt, IsString, IsEnum, IsOptional, Min } from 'class-validator';
import { MovementType } from '@generated/prisma/enums';

export class CreateMovementDto {
  @IsInt({ message: 'El productId debe ser un número entero' })
  productId!: number;

  @IsEnum(MovementType, {
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
  @IsOptional()
  receivedBy?: string;
}
