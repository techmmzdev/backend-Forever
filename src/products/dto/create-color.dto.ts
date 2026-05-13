import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateColorDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre del color no puede estar vacío' })
  name!: string;

  @IsString()
  @IsOptional()
  hexCode?: string;
}
