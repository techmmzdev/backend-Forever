import {
  Html,
  Head,
  Body,
  Container,
  Tailwind,
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
      <Preview>Contraseña actualizada — Forever Kids</Preview>
      <Tailwind>
        <Body className="bg-[#0f172a] font-sans">
          <Container className="mx-auto max-w-[480px] py-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                {/* <div className="w-12 h-12 rounded-xl bg-[#6366f1] flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">FK</span>
                </div> */}
                <Text className="text-2xl font-bold text-[#1e293b] m-0">
                  Forever Kids
                </Text>
                <Text className="text-sm text-[#64748b] m-0 mt-1">
                  Sistema de Inventario
                </Text>
              </div>

              {/* ✅ Ícono check — centrado con tabla para compatibilidad email */}
              <Section className="text-center mb-5">
                <Row>
                  <Column align="center">
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        backgroundColor: '#dcfce7',
                        display: 'inline-block',
                        lineHeight: '44px',
                        textAlign: 'center',
                      }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#16a34a"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ verticalAlign: 'middle' }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </Column>
                </Row>
              </Section>

              <Text className="text-lg font-semibold text-[#1e293b] m-0">
                Contraseña actualizada
              </Text>

              <Text className="text-[#475569] text-sm mt-3 leading-relaxed">
                La contraseña de tu cuenta en Forever Kids se ha cambiado
                correctamente.
              </Text>

              <Text className="text-[#475569] text-sm mt-3 leading-relaxed">
                Si no realizaste este cambio, contacta al administrador del
                sistema de inmediato.
              </Text>

              <Hr className="border-[#e2e8f0] my-6" />

              <Text className="text-[#94a3b8] text-xs text-center m-0">
                Forever Kids — Sistema de Inventario
              </Text>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
