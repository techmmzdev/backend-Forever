import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';
import { UserRole } from '@generated/prisma/enums';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  username!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(4)
  password!: string;

  @IsEnum(UserRole)
  role!: 'ADMIN' | 'STAFF';
}
