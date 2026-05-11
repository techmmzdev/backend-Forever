import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs';
import { NestExpressApplication } from '@nestjs/platform-express';
import { GlobalExceptionFilter } from '@/common/filters/http-exception.filter';

const REQUIRED_ENV_VARS = ['DATABASE_URL', 'JWT_SECRET'] as const;

function validateEnv(): void {
  const missing = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Faltan variables de entorno requeridas: ${missing.join(', ')}`,
    );
  }
}

async function bootstrap() {
  validateEnv();

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });

  const logger = new Logger('Bootstrap');

  // Crear carpeta uploads si no existe
  const uploadsDir = join(process.cwd(), 'uploads');

  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // Servir archivos estáticos
  app.useStaticAssets(join(process.cwd(), 'public'));
  app.useStaticAssets(uploadsDir, {
    prefix: '/uploads',
  });

  // CORS dinámico por entorno
  const isProduction = process.env.NODE_ENV === 'production';

  const corsOrigins = isProduction
    ? (process.env.CORS_ORIGIN_PROD ?? '').split(',').filter(Boolean)
    : [process.env.CORS_ORIGIN || 'http://localhost:5173'];

  app.enableCors({
    origin: corsOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  // Filtro de excepciones global
  app.useGlobalFilters(new GlobalExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = parseInt(process.env.PORT ?? '3000', 10);
  await app.listen(port);

  logger.log(
    `API corriendo en http://localhost:${port} (${process.env.NODE_ENV || 'development'})`,
  );
}

bootstrap().catch((error) => {
  console.error('Error al iniciar la aplicación:', error);
  process.exit(1);
});
