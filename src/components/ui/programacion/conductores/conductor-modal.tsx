import { api } from "@/utils/api";
import { Button, Modal, Space, Tag, Typography } from "antd";
import Image from "next/image";
import { useState } from "react";
import { PiWarningCircleBold } from "react-icons/pi";

const { confirm } = Modal;
const { Title, Text } = Typography;

type TProps = {
  id: string;
  activator: string;
  setConductorIdToEdit: (id: string) => void;
  setIsModalOpen: (value: boolean) => void;
};

export default function ConductorModal({
  id,
  activator,
  setConductorIdToEdit,
  setIsModalOpen,
}: TProps) {
  const conductorDeleteMutation = api.conductores.deleteConductor.useMutation();
  const { data: conductorSingle } = api.conductores.getConductorById.useQuery({
    id,
  });
  const [open, setOpen] = useState(false);
  const showDeleteConfirm = (id: string) => {
    confirm({
      title: "Estas segur@ de eliminar a este conductor ?",
      icon: <PiWarningCircleBold size={30} className="mr-4" color="red" />,
      content: "Todos los datos serán eliminados",
      okText: "Sí",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDeleteConductor(id);
      },
    });
    setOpen(false);
  };

  const handleDeleteConductor = (id: string) => {
    conductorDeleteMutation.mutate({
      id,
    });
    setOpen(false);
  };
  function capitalizeFirstLetter(string: string | undefined) {
    if (string === undefined) {
      return "";
    }
    return string
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return (
    <>
      <Button className="p-0" onClick={() => setOpen(true)} type="link">
        {activator}
      </Button>
      <Modal
        title={
          <p className="mb-7">
            <Title level={3}>Información</Title>
            <Text className=" font-light ">Datos generales del conductor</Text>
          </p>
        }
        centered
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
        okText="Guardar"
        onOk={() => {
          setOpen(false);
        }}
        width={550}
        footer={
          <Space>
            <Button
              onClick={() => {
                setConductorIdToEdit(conductorSingle?.response?.id as string);
                setIsModalOpen(true);
              }}
            >
              Editar
            </Button>
            <Button
              danger
              onClick={() =>
                showDeleteConfirm(conductorSingle?.response?.id as string)
              }
            >
              Eliminar
            </Button>
          </Space>
        }
      >
        <div className="mt-8 flex justify-between">
          <div className=" space-y-3">
            <p>
              <Typography.Text strong>Licencia : </Typography.Text>
              <Tag> {conductorSingle?.response?.numeroLicencia}</Tag>
            </p>

            <p>
              <Typography.Text strong>Nombres : </Typography.Text>
              <Typography.Text>
                {capitalizeFirstLetter(conductorSingle?.response?.nombres)}
              </Typography.Text>
            </p>
            <p>
              <Typography.Text strong>Apellidos : </Typography.Text>
              <Typography.Text>
                {capitalizeFirstLetter(conductorSingle?.response?.apellidos)}
              </Typography.Text>
            </p>

            <p>
              <Typography.Text strong>Télefono : </Typography.Text>
              <Typography.Text>
                {conductorSingle?.response?.telefono}
              </Typography.Text>
            </p>
            <p>
              <Typography.Text strong>Estado : </Typography.Text>
              <Tag
                className="rounded-full shadow-md"
                color={
                  conductorSingle?.response?.disponibilidad === true
                    ? "green-inverse"
                    : "red-inverse"
                }
              >
                {conductorSingle?.response?.disponibilidad === true
                  ? "Disponible"
                  : "No Disponible"}
              </Tag>
            </p>
          </div>
          <Image
            src={conductorSingle?.response?.foto as string}
            width={200}
            height={200}
            className="rounded-lg object-cover "
            alt="Bus Preview"
          />
        </div>
      </Modal>
    </>
  );
}
