import { api } from "@/utils/api";
import { Divider, Modal, Tag, Typography } from "antd";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { MisBoletosVendidosTable } from "./mis-pasajes-table";
const { Title } = Typography;

export const MisBoletos = ({ viajeId }: { viajeId: string }) => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const usuarioId = session?.user.id;
  const { data: misBoletos, isLoading } =
    api.viajes.getMisBoletosByViajeId.useQuery({
      id: viajeId,
      // userId: usuarioId,
    });
  const { data: viaje } = api.viajes.getViajeById.useQuery({
    id: viajeId,
  });

  return (
    <div>
      <Typography onClick={() => setOpen(true)}>Mis Boletos</Typography>
      <Modal
        title={
          <div>
            <div className="flex gap-4">
              <Title level={4}>Mis Boletos Vendidos</Title>
              <span>
                <Tag color="blue" className="px-3">
                  {viaje?.response?.bus.placa}
                </Tag>
              </span>
            </div>

            <Divider className="mb-4" />
          </div>
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
