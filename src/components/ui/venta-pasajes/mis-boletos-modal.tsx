import { api } from "@/utils/api";
import { Modal, Space, Tag, Typography } from "antd";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { MisBoletosVendidosTable } from "./mis-pasajes-table";
const { Title, Text } = Typography;

export const MisBoletos = ({ viajeId }: { viajeId: string }) => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const usuarioId = session?.user.id;
  const { data: misBoletos, isLoading } =
    api.viajes.getMisBoletosByViajeId.useQuery({
      id: viajeId,
      userId: usuarioId ?? "",
    });
  const { data: viaje } = api.viajes.getViajeById.useQuery({
    id: viajeId,
  });

  return (
    <div>
      <Typography onClick={() => setOpen(true)}>Mis Boletos</Typography>
      <Modal
        title={
          <Space direction="vertical" className="mb-2 gap-1">
            <Title level={4}>Mis Boletos Vendidos</Title>
            <Space className="flex items-center gap-2">
              <Text className=" font-light ">
                {viaje?.response?.ruta.ciudadOrigen} -{" "}
                {viaje?.response?.ruta.ciudadDestino}
              </Text>{" "}
              <Tag color="blue">
                {viaje?.response?.salida.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Tag>
            </Space>
          </Space>
        }
        centered
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={900}
      >
        <MisBoletosVendidosTable
          data={misBoletos?.response}
          isLoading={isLoading}
        />
      </Modal>
    </div>
  );
};
