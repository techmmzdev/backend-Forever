import { IsInt, IsString, IsEnum, IsOptional, Min, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { MovementType } from '@generated/prisma/enums';

class MovementColorDto {
  @IsInt()
  productColorId!: number;

  @IsInt()
  @Min(1)
  quantity!: number;
}

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

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => MovementColorDto)
  @ArrayMinSize(1)
  colors?: MovementColorDto[];
}
