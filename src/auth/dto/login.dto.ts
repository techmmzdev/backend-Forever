import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty({ message: 'El username no puede estar vacío' })
  username!: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña no puede estar vacía' })
  password!: string;
}
