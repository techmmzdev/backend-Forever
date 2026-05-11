import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

import { UserRole } from '../auth.types';

export class RegisterDto {
  @IsString()
  @IsNotEmpty({ message: 'El username no puede estar vacío' })
  username!: string;

  @IsEmail({}, { message: 'Debe ser un email válido' })
  @IsNotEmpty({ message: 'El email no puede estar vacío' })
  email!: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener mínimo 6 caracteres' })
  password!: string;

  @IsEnum(UserRole, { message: 'El rol debe ser ADMIN o STAFF' })
  role!: UserRole;
}
