import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Debe ser un email válido' })
  @IsNotEmpty({ message: 'El email no puede estar vacío' })
  email!: string;

  @IsString()
  @MinLength(6, {
    message: 'La contraseña debe tener mínimo 6 caracteres',
  })
  password!: string;
}
