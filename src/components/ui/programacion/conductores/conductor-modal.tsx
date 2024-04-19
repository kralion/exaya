import { api } from "@/utils/api";
import { Button, Modal, Tag, Typography } from "antd";
import Image from "next/image";
import { PiWarningCircleBold } from "react-icons/pi";

const { confirm } = Modal;
const { Title } = Typography;

type TProps = {
  id: string;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function ConductorModal({ id, open, setOpen }: TProps) {
  const conductorDeleteMutation = api.conductores.deleteConductor.useMutation();
  const { data: conductorSingle } = api.conductores.getConductorById.useQuery({
    id,
  });

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
    const lowerCaseString = string.toLowerCase();
    return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
  }
  return (
    <Modal
      title={<Title level={3}>Información del Conductor</Title>}
      centered
      open={open}
      onCancel={() => {
        setOpen(false);
      }}
      okText="Guardar"
      onOk={() => {
        setOpen(false);
      }}
      width={700}
      footer={
        <div>
          {/* {isEditing ? (
              <Button onClick={handleSave}>Guardar</Button>
            ) : (
              <Button onClick={handleEdit}>Editar</Button>
            )} */}

          <Button
            danger
            onClick={() =>
              showDeleteConfirm(conductorSingle?.response?.id as string)
            }
          >
            Eliminar
          </Button>
        </div>
      }
    >
      <hr className="mb-2" />
      <div className="flex items-center justify-between p-3">
        <div className="mt-7 space-y-3">
          <p>
            <Typography.Text strong>Cod Licencia : </Typography.Text>
            <Tag> {conductorSingle?.response?.numeroLicencia}</Tag>
          </p>

          <p>
            <Typography.Text strong>Nombre : </Typography.Text>
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
            <Typography.Text strong>Disponibilidad : </Typography.Text>
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
          <p>
            <Typography.Text strong>Télefono : </Typography.Text>
            <Typography.Text>
              {conductorSingle?.response?.telefono}
            </Typography.Text>
          </p>
        </div>
        <Image
          src="https://img.freepik.com/free-vector/driving-instruction-abstract-concept-vector-illustration_335657-5684.jpg?w=740&t=st=1699642057~exp=1699642657~hmac=809aef5ab939ec6ec6846d03bba4d9af8da8a470d973ac7ad33a16bf00ebf57b"
          width={300}
          height={200}
          className="rounded-lg object-cover "
          alt="Bus Preview"
        />
      </div>
    </Modal>
  );
}
