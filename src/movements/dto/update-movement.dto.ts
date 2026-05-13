import { IsString, IsOptional } from 'class-validator';

export class UpdateMovementDto {
  @IsString()
  @IsOptional()
  observations?: string;

  @IsString()
  @IsOptional()
  receivedBy?: string;
}
