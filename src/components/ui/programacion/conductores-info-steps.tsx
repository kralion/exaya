import ConductorInfoStepSkeleton from "@/components/skeletons/conductor-step-skeleton";
import type { IConductor } from "@/interfaces";
import { api } from "@/utils/api";
import {
  Avatar,
  Button,
  Empty,
  List,
  Modal,
  Steps,
  Tag,
  Typography,
} from "antd";
import Image from "next/image";
import { Suspense, useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { PiWarningCircleBold } from "react-icons/pi";

const { confirm } = Modal;
const { Title } = Typography;
const items = [
  {
    title: "Nivel 1",
    description: "Licencia A2B",
  },
  {
    title: "Nivel 2",
    description: "Licencia A3B",
  },
  {
    title: "Nivel 3",
    description: "Licencia A3C",
  },
];

export function ConductoresInformacion() {
  const [open, setOpen] = useState(false);
  const [conductor, setConductor] = useState<IConductor>();
  const { data: conductoresRegistrados } =
    api.conductores.getAllConductores.useQuery();

  console.log(conductoresRegistrados?.length);

  const showDeleteConfirm = () => {
    confirm({
      title: "Estas seguro de eliminar a este conductor ?",
      icon: <PiWarningCircleBold size={30} className="mr-4" color="red" />,
      content: "Todos los datos serán eliminados",
      okText: "Sí",
      okType: "danger",
      cancelText: "No",
      onOk() {
        typeof conductor !== "undefined" && handleDeleteConductor(conductor.id);
        setOpen(false);
      },
    });
  };

  const openModal = (conductor: IConductor) => {
    setConductor(conductor);
    setOpen(true);
  };

  const conductorDeleteMutation = api.conductores.deleteConductor.useMutation();
  const handleDeleteConductor = (id: string) => {
    conductorDeleteMutation.mutate({
      id,
    });
    setOpen(false);
  };

  return (
    <>
      <List
        itemLayout="horizontal"
        className=" w-max  min-w-[500px] rounded-lg border-1 "
        dataSource={conductoresRegistrados}
        renderItem={(conductor, index) =>
          (conductoresRegistrados?.length ?? 0) > 0 ? (
            <Suspense fallback={<ConductorInfoStepSkeleton />}>
              <List.Item
                onClick={() => {
                  openModal(conductor as IConductor);
                }}
                key={index}
                className="cursor-pointer  rounded-lg  bg-zinc-100 shadow-md duration-100 hover:opacity-80 hover:shadow-none"
                style={{
                  paddingLeft: 14,
                  paddingRight: 14,
                }}
              >
                <List.Item.Meta
                  avatar={<Avatar src={conductor.foto} />}
                  title={
                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.sutran.gob.pe/informacion-del-conductor-y-bus-de-tu-viaje/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {conductor.conductorDni}
                      </a>
                      {conductor.disponibilidad === true ? (
                        <AiFillCheckCircle className=" text-green-500" />
                      ) : (
                        <AiFillCloseCircle className=" text-red-500" />
                      )}
                    </div>
                  }
                  description={
                    <div className="flex items-center gap-3">
                      <p>{conductor.numeroLicencia}</p>
                    </div>
                  }
                />
                <Steps
                  style={{ marginTop: 8 }}
                  type="inline"
                  current={
                    conductor.claseLicencia === "A2B"
                      ? 2
                      : conductor.claseLicencia === "A3A"
                      ? 1
                      : 0
                  }
                  items={items}
                />
              </List.Item>
            </Suspense>
          ) : (
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{ height: 60 }}
              description={<span>No hay conductores</span>}
            />
          )
        }
      />

      <Modal
        title={<Title level={3}>Información del Conductor</Title>}
        centered
        open={
          open && conductor !== null && conductor !== undefined ? true : false
        }
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

            <Button danger onClick={showDeleteConfirm}>
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
              <Tag> {conductor?.numeroLicencia}</Tag>
            </p>

            <p>
              <Typography.Text strong>Nombre : </Typography.Text>
              <Typography.Text>{conductor?.conductorDni}</Typography.Text>
            </p>
            <p>
              <Typography.Text strong>Apellidos : </Typography.Text>
              <Typography.Text>{conductor?.conductorDni}</Typography.Text>
            </p>

            <p>
              <Typography.Text strong>Télefono : </Typography.Text>
              <Typography.Text>{conductor?.telefono}</Typography.Text>
            </p>
            <p>
              <Typography.Text strong>Disponibilidad : </Typography.Text>
              <Tag
                className="rounded-full shadow-md"
                color={
                  conductor?.disponibilidad === true
                    ? "green-inverse"
                    : "red-inverse"
                }
              >
                {conductor?.disponibilidad === true
                  ? "Disponible"
                  : "No Disponible"}
              </Tag>
            </p>
            <p>
              <Typography.Text strong>Télefono : </Typography.Text>
              <Typography.Text>{conductor?.telefono}</Typography.Text>
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
    </>
  );
}
