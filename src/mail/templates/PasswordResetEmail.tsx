import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Button,
  Hr,
  Preview,
  Section,
  Row,
  Column,
} from '@react-email/components';

interface Props {
  link: string;
}

export function PasswordResetEmail({ link }: Props) {
  return (
    <Html>
      <Head />

      <Preview>Recupera tu contraseña — Forever Kids</Preview>

      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#f1f5f9',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <Container
          style={{
            width: '100%',
            maxWidth: '520px',
            margin: '0 auto',
            padding: '40px 16px',
          }}
        >
          {/* Card */}
          <Section
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '40px 32px',
              border: '1px solid #e2e8f0',
            }}
          >
            {/* Header */}
            <Section>
              <Text
                style={{
                  margin: 0,
                  textAlign: 'center',
                  fontSize: '30px',
                  fontWeight: '800',
                  color: '#0f172a',
                  lineHeight: '36px',
                }}
              >
                Forever Kids
              </Text>

              <Text
                style={{
                  margin: '8px 0 0 0',
                  textAlign: 'center',
                  fontSize: '14px',
                  color: '#64748b',
                }}
              >
                Sistema de Inventario
              </Text>
            </Section>

            {/* Lock Icon */}
            <Section style={{ marginTop: '32px' }}>
              <Row>
                <Column align="center">
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '999px',
                      backgroundColor: '#ede9fe',
                      textAlign: 'center',
                      lineHeight: '64px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '30px',
                      }}
                    >
                      🔒
                    </span>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Title */}
            <Text
              style={{
                margin: '32px 0 0 0',
                textAlign: 'center',
                fontSize: '28px',
                fontWeight: '700',
                color: '#0f172a',
                lineHeight: '34px',
              }}
            >
              Recupera tu contraseña
            </Text>

            {/* Description */}
            <Text
              style={{
                margin: '20px 0 0 0',
                textAlign: 'center',
                fontSize: '16px',
                lineHeight: '28px',
                color: '#475569',
              }}
            >
              Recibimos una solicitud para restablecer la contraseña de tu
              cuenta en Forever Kids.
            </Text>

            <Text
              style={{
                margin: '16px 0 0 0',
                textAlign: 'center',
                fontSize: '16px',
                lineHeight: '28px',
                color: '#475569',
              }}
            >
              Haz clic en el botón para continuar con el proceso.
            </Text>

            {/* Button */}
            <Section style={{ marginTop: '32px' }}>
              <Row>
                <Column align="center">
                  <Button
                    href={link}
                    style={{
                      backgroundColor: '#4f46e5',
                      color: '#ffffff',
                      padding: '14px 28px',
                      borderRadius: '12px',
                      fontSize: '15px',
                      fontWeight: '600',
                      textDecoration: 'none',
                    }}
                  >
                    Restablecer contraseña
                  </Button>
                </Column>
              </Row>
            </Section>

            {/* Expiration Box */}
            <Section
              style={{
                marginTop: '32px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '20px',
              }}
            >
              <Text
                style={{
                  margin: 0,
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#334155',
                }}
              >
                ⏳ Este enlace expirará en <strong>1 hora</strong>.
              </Text>

              <Text
                style={{
                  margin: '10px 0 0 0',
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#334155',
                }}
              >
                Si no solicitaste este cambio, puedes ignorar este correo de
                forma segura.
              </Text>
            </Section>

            {/* Backup Link */}
            <Section style={{ marginTop: '28px' }}>
              <Text
                style={{
                  margin: 0,
                  fontSize: '13px',
                  lineHeight: '24px',
                  color: '#64748b',
                  textAlign: 'center',
                }}
              >
                Si el botón no funciona, copia y pega este enlace en tu
                navegador:
              </Text>

              <Text
                style={{
                  margin: '12px 0 0 0',
                  fontSize: '12px',
                  lineHeight: '22px',
                  color: '#4f46e5',
                  textAlign: 'center',
                  wordBreak: 'break-all',
                }}
              >
                {link}
              </Text>
            </Section>

            <Hr
              style={{
                margin: '36px 0',
                borderColor: '#e2e8f0',
              }}
            />

            {/* Footer */}
            <Text
              style={{
                margin: 0,
                textAlign: 'center',
                fontSize: '12px',
                lineHeight: '20px',
                color: '#94a3b8',
              }}
            >
              Este correo fue enviado automáticamente por Forever Kids.
            </Text>

            <Text
              style={{
                margin: '6px 0 0 0',
                textAlign: 'center',
                fontSize: '12px',
                lineHeight: '20px',
                color: '#94a3b8',
              }}
            >
              Por seguridad, nunca compartas tus credenciales.
            </Text>

            <Text
              style={{
                margin: '24px 0 0 0',
                textAlign: 'center',
                fontSize: '12px',
                color: '#94a3b8',
              }}
            >
              © 2026 Forever Kids — Todos los derechos reservados
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
