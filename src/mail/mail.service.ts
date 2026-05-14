import { createElement } from 'react';
import { Injectable, Logger } from '@nestjs/common';
import { Resend } from 'resend';
import { render } from '@react-email/components';
import { PasswordResetEmail } from './templates/PasswordResetEmail';
import { PasswordResetConfirmation } from './templates/PasswordResetConfirmation';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private resend: Resend | null = null;

  private readonly from = 'Forever Kids <no-reply@kids.techmmz.shop>';

  constructor() {
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      this.resend = new Resend(apiKey);
    } else {
      this.logger.warn('RESEND_API_KEY no configurada — emails no se enviarán');
    }
  }

  async sendPasswordReset(email: string, token: string): Promise<void> {
    if (!this.resend) {
      this.logger.warn(
        `[skip] RESEND_API_KEY no disponible. Token para ${email}: ${token}`,
      );
      return;
    }

    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
    const link = `${frontendUrl}/reset-password?token=${token}`;
    const html = await render(createElement(PasswordResetEmail, { link }));

    await this.resend.emails.send({
      from: this.from,
      to: email,
      subject: 'Recupera tu contraseña — Forever Kids',
      html,
    });

    this.logger.log(`Email de recuperación enviado a ${email}`);
  }

  async sendPasswordResetConfirmation(email: string): Promise<void> {
    if (!this.resend) {
      this.logger.log(
        `[skip] RESEND_API_KEY no disponible. Confirmación para ${email}`,
      );
      return;
    }

    const html = await render(createElement(PasswordResetConfirmation));

    await this.resend.emails.send({
      from: this.from,
      to: email,
      subject: 'Contraseña actualizada — Forever Kids',
      html,
    });

    this.logger.log(`Confirmación de cambio enviada a ${email}`);
  }
}
