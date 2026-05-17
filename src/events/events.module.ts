import { Global, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EventsGateway } from './events.gateway';

@Global()
@Module({
  providers: [EventsGateway, JwtService],
  exports: [EventsGateway],
})
export class EventsModule {}
