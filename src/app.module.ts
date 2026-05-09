import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { PrismaModule } from './config/prisma.module';
import { ProductsModule } from './products/products.module';
import { MovementsService } from './movements/movements.service';
import { MovementsModule } from './movements/movements.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    CategoriesModule,
    ProductsModule,
    MovementsModule,
  ],
  controllers: [AppController],
  providers: [AppService, MovementsService],
})
export class AppModule {}
