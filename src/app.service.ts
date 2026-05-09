import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const status = {
      name: 'Bienvenido al Warehouse Management System',
      version: '1.0.0',
      env: process.env.NODE_ENV || 'development',
    };

    return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${status.name} | API</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Inter', sans-serif; background-color: #0f172a; color: #f8fafc; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
          .card { background: #1e293b; padding: 2rem; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); border: 1px solid #334155; max-width: 400px; width: 100%; text-align: center; }
          .status-dot { height: 10px; width: 10px; background-color: #22c55e; border-radius: 50%; display: inline-block; margin-right: 8px; box-shadow: 0 0 8px #22c55e; }
          h1 { margin: 0 0 0.5rem 0; font-size: 1.5rem; }
          p { color: #94a3b8; margin-bottom: 1.5rem; }
          .badge { background: #334155; padding: 4px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; color: #38bdf8; }
          .footer { margin-top: 2rem; font-size: 0.75rem; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>${status.name}</h1>
          <p><span class="status-dot"></span> API Operacional</p>
          <span class="badge">v${status.version}</span>
          <span class="badge">${status.env.toUpperCase()}</span>
          <div class="footer">
            &copy; ${new Date().getFullYear()} • Sistema de Gestión de Almacén
          </div>
        </div>
      </body>
      </html>
    `;
  }
}
