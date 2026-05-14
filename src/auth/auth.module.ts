import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '@/users/users.module';
import { PrismaModule } from '@/config/prisma.module';
import { MailModule } from '@/mail/mail.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    MailModule,

    JwtModule.register({
      secret: process.env.JWT_SECRET,

      signOptions: {
        expiresIn: '8h',
      },
    }),
  ],

  providers: [AuthService, JwtStrategy],

  controllers: [AuthController],

  exports: [JwtModule],
})
export class AuthModule {
  constructor() {
    if (!process.env.JWT_SECRET) {
      throw new Error(
        'JWT_SECRET no está configurado en las variables de entorno',
      );
    }
  }
}
