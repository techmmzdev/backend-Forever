// src/app.interface.ts
export interface SystemStatus {
  status: 'online' | 'maintenance' | 'offline';
  message: string;
  version: string;
  environment: string;
  uptime: number;
  timestamp: string;
}
