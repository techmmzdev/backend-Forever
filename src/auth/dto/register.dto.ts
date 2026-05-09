import { IsString, IsNotEmpty, IsEnum, MinLength } from 'class-validator';

export enum UserRoleEnum {
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
}

export class RegisterDto {
  @IsString()
  @IsNotEmpty({ message: 'El username no puede estar vacío' })
  username!: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener mínimo 6 caracteres' })
  password!: string;

  @IsEnum(UserRoleEnum, { message: 'El rol debe ser ADMIN o STAFF' })
  role!: UserRoleEnum;
}
