import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Hr,
  Preview,
  Section,
  Row,
  Column,
} from '@react-email/components';

export function PasswordResetConfirmation() {
  return (
    <Html>
      <Head />

      <Preview>Tu contraseña fue actualizada correctamente</Preview>

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
            {/* Logo / Header */}
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

            {/* Success Icon */}
            <Section style={{ marginTop: '32px' }}>
              <Row>
                <Column align="center">
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '999px',
                      backgroundColor: '#dcfce7',
                      textAlign: 'center',
                      lineHeight: '64px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '32px',
                        color: '#16a34a',
                        fontWeight: '700',
                      }}
                    >
                      ✓
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
              Contraseña actualizada
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
              La contraseña de tu cuenta en Forever Kids se ha actualizado
              correctamente.
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
              Si realizaste este cambio, no necesitas hacer nada más.
            </Text>

            {/* Alert Box */}
            <Section
              style={{
                marginTop: '32px',
                backgroundColor: '#fff7ed',
                border: '1px solid #fdba74',
                borderRadius: '16px',
                padding: '20px',
              }}
            >
              <Text
                style={{
                  margin: 0,
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#9a3412',
                }}
              >
                <strong>¿No fuiste tú?</strong>
              </Text>

              <Text
                style={{
                  margin: '8px 0 0 0',
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#9a3412',
                }}
              >
                Contacta inmediatamente al administrador del sistema para
                proteger tu cuenta.
              </Text>
            </Section>

            {/* Info Box */}
            <Section
              style={{
                marginTop: '28px',
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
                  color: '#334155',
                  lineHeight: '24px',
                }}
              >
                <strong>Fecha:</strong> 14 de mayo de 2026
              </Text>

              <Text
                style={{
                  margin: '10px 0 0 0',
                  fontSize: '14px',
                  color: '#334155',
                  lineHeight: '24px',
                }}
              >
                <strong>Dispositivo:</strong> Chrome en Windows
              </Text>

              <Text
                style={{
                  margin: '10px 0 0 0',
                  fontSize: '14px',
                  color: '#334155',
                  lineHeight: '24px',
                }}
              >
                <strong>Ubicación:</strong> Guadalajara, México
              </Text>
            </Section>

            {/* Button */}
            <Section style={{ marginTop: '32px' }}>
              <Row>
                <Column align="center">
                  <a
                    href="https://foreverkids.com/security"
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#0f172a',
                      color: '#ffffff',
                      textDecoration: 'none',
                      padding: '14px 24px',
                      borderRadius: '12px',
                      fontSize: '15px',
                      fontWeight: '600',
                    }}
                  >
                    Revisar actividad reciente
                  </a>
                </Column>
              </Row>
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
