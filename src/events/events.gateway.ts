import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';

@WebSocketGateway({
  cors: {
    origin: ['http://localhost:5173', 'https://kids.techmmz.shop'],
    credentials: true,
  },
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  private connectedClients = 0;

  constructor(private readonly jwtService: JwtService) {}

  handleConnection(client: Socket) {
    try {
      const token =
        client.handshake.auth?.token ?? client.handshake.query?.token;

      if (!token) {
        client.disconnect();
        return;
      }

      this.jwtService.verify(token as string);
      this.connectedClients++;
    } catch {
      client.disconnect();
    }
  }

  handleDisconnect() {
    this.connectedClients--;
  }

  emitStockUpdate(productId: number) {
    this.server.emit('stock-update', { productId });
  }

  emitProductChange(action: string, productId: number) {
    this.server.emit('product-change', { action, productId });
  }
}
