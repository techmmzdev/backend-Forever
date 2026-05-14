import {
  Html,
  Head,
  Body,
  Container,
  Tailwind,
  Text,
  Button,
  Hr,
  Preview,
} from '@react-email/components';

interface Props {
  link: string;
}

export function PasswordResetEmail({ link }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Recupera tu contraseña — Forever Kids</Preview>
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

              <Text className="text-lg font-semibold text-[#1e293b] m-0">
                Recupera tu contraseña
              </Text>

              <Text className="text-[#475569] text-sm mt-3 leading-relaxed">
                Recibimos una solicitud para restablecer la contraseña de tu
                cuenta en Forever Kids. Haz clic en el siguiente botón para
                continuar:
              </Text>

              <div className="text-center my-6">
                <Button
                  href={link}
                  className="bg-[#6366f1] text-white px-8 py-3 rounded-xl font-semibold text-sm"
                >
                  Restablecer contraseña
                </Button>
              </div>

              <Text className="text-[#64748b] text-xs mt-4 leading-relaxed">
                Este enlace expira en <strong>1 hora</strong>. Si no solicitaste
                este cambio, ignora este mensaje y tu contraseña permanecerá
                igual.
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
