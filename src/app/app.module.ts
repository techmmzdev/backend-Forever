import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { ThrottlerMutationGuard } from '@/common/guards/throttler-mutation.guard';
import { LoggerModule } from 'nestjs-pino';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@/auth/auth.module';
import { CategoriesModule } from '@/categories/categories.module';
import { PrismaModule } from '@/config/prisma.module';
import { ProductsModule } from '@/products/products.module';
import { MovementsModule } from '@/movements/movements.module';
import { FilesModule } from '@/files/files.module';
import { HealthModule } from '@/health/health.module';
import { RolesModule } from '@/roles/roles.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.LOG_LEVEL || 'info',
        redact: ['req.headers.authorization', 'req.headers.cookie'],
        transport:
          process.env.NODE_ENV !== 'production'
            ? { target: 'pino-pretty' }
            : undefined,
      },
    }),

    ThrottlerModule.forRoot([
      {
        ttl: parseInt(process.env.THROTTLE_TTL ?? '60', 10) * 1000,
        limit: parseInt(process.env.THROTTLE_LIMIT ?? '10', 10),
      },
    ]),

    PrismaModule,
    AuthModule,
    CategoriesModule,
    ProductsModule,
    MovementsModule,
    FilesModule,
    HealthModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerMutationGuard,
    },
  ],
})
export class AppModule {}
