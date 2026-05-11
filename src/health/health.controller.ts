import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '@/config/prisma.service';

@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async check() {
    const start = process.hrtime.bigint();

    try {
      await this.prisma.$queryRaw`SELECT 1`;
    } catch {
      return {
        status: 'error',
        database: 'disconnected',
        timestamp: new Date().toISOString(),
      };
    }

    const diff = Number(process.hrtime.bigint() - start) / 1_000_000;

    return {
      status: 'ok',
      database: 'connected',
      responseTime: `${diff.toFixed(2)}ms`,
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}
