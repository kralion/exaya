import Bus1 from "@/assets/buses/bus-1.png";
import Bus2 from "@/assets/buses/bus-2.png";
import Bus3 from "@/assets/buses/bus-3.png";
import Bus4 from "@/assets/buses/bus-4.png";
import Bus5 from "@/assets/buses/bus-5.png";
import type { IConductor } from "@/interfaces";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { Title } from "@mantine/core";
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
import { useState } from "react";

const { confirm } = Modal;

const data: IConductor[] = [
  {
    id: 1,
    created_at: "2023-08-23T00:00:00Z",
    nombres: "Hector",
    nivel: 0,
    apellidos: "Ramirez",
    dni: "12345678",
    telefono: "+123456789",
    foto_bus: Bus1,
    licencia_conducir: "LC12345",
    disponibilidad: true,
    foto_perfil: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    estado_documentario: "Documentos Actualizados",
  },
  {
    id: 2,
    created_at: "2023-08-23T00:00:00Z",
    nombres: "Ramiro",
    apellidos: "Villaverde",
    nivel: 1,
    dni: "87654321",
    telefono: "+987654321",
    foto_bus: Bus2,
    licencia_conducir: "LC67890",
    disponibilidad: true,
    foto_perfil: "https://randomuser.me/api/portraits/men/86.jpg",
    estado_documentario: "En Trámite",
  },
  {
    id: 3,
    created_at: "2023-08-23T00:00:00Z",
    nombres: "Julio",
    apellidos: "Rojas",
    dni: "54321678",
    nivel: 2,
    telefono: "+543216789",
    foto_bus: Bus3,
    licencia_conducir: "LC54321",
    disponibilidad: true,
    foto_perfil: "https://randomuser.me/api/portraits/men/1.jpg",
    estado_documentario: "Documentos Actualizados",
  },
  {
    id: 4,
    created_at: "2023-08-23T00:00:00Z",
    nombres: "Danilo",
    apellidos: "Alfaro",
    dni: "98761234",
    foto_bus: Bus5,
    telefono: "+987612345",
    licencia_conducir: "LC98765",
    nivel: 2,
    disponibilidad: false,
    foto_perfil: "https://randomuser.me/api/portraits/men/46.jpg",
    estado_documentario: "Documentos Actualizados",
  },
  {
    id: 5,
    created_at: "2023-08-23T00:00:00Z",
    nombres: "Roberto",
    apellidos: "Almirante",
    dni: "34567891",
    telefono: "+345678912",
    nivel: 0,
    licencia_conducir: "LC34567",
    disponibilidad: true,
    foto_perfil:
      "https://images.unsplash.com/photo-1455354269813-737d9df115bb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=1229aa0db2a9a42022b7669f30784123",
    estado_documentario: "Documentos Actualizados",
    foto_bus: Bus4,
  },
  {
    id: 6,
    created_at: "2023-08-23T00:00:00Z",
    nombres: "Camilo",
    apellidos: "Paredes",
    nivel: 1,
    dni: "56789123",
    telefono: "+567891234",
    licencia_conducir: "LC56789",
    disponibilidad: true,
    foto_perfil:
      "https://images.unsplash.com/photo-1474533410427-a23da4fd49d0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=ee9537f6365657688885825712e3349d",
    estado_documentario: "Documentos Actualizados",
  },
];

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
  const [conductor, setConductor] = useState<IConductor | null>(null);

  const showDeleteConfirm = () => {
    confirm({
      title: "Estas seguro de eliminar a este conductor ?",
      icon: <ExclamationCircleFilled />,
      content: "Todos los datos serán eliminados",
      okText: "Sí",
      okType: "danger",
      cancelText: "No",
      onOk() {
        typeof conductor !== "undefined" &&
          data.splice(
            data.findIndex((item) => item.id === conductor?.id),
            1
          );

        setOpen(false);
      },
    });
  };

  const openModal = (conductor: IConductor) => {
    setConductor(conductor);
    setOpen(true);
  };
  const handleEdit = () => {
    alert("Editando");
  };
  const handleSave = () => {
    setOpen(false);
  };

  return (
    <div className="rounded-lg shadow-md">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(conductor, index) =>
          data.length > 0 ? (
            <List.Item
              onClick={() => {
                openModal(conductor);
              }}
              key={index}
              className="cursor-pointer  rounded-lg duration-200 hover:bg-gray-100"
              style={{
                paddingLeft: 14,
                paddingRight: 14,
              }}
            >
              <List.Item.Meta
                avatar={<Avatar src={conductor.foto_perfil} />}
                title={
                  <a
                    href="https://www.sutran.gob.pe/informacion-del-conductor-y-bus-de-tu-viaje/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {conductor.nombres}
                  </a>
                }
                description={
                  <div className="flex gap-3">
                    <p>{conductor.licencia_conducir}</p>

                    <Tag
                      className="h-4 w-2  rounded-full"
                      title={
                        conductor.disponibilidad === true
                          ? "Disponible"
                          : "No Disponible"
                      }
                      color={
                        conductor.disponibilidad === true ? "green" : "red"
                      }
                    >
                      {conductor.disponibilidad}
                    </Tag>
                  </div>
                }
              />
              <Steps
                style={{ marginTop: 8 }}
                type="inline"
                current={conductor.nivel}
                // status={conductor.status as StepsProps["status"]}
                items={items}
              />
            </List.Item>
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
        title={
          <Title order={3} style={{ marginBottom: 0 }}>
            Información del Conductor
            <hr className="mt-3 " />
          </Title>
        }
        centered
        open={
          open && conductor !== null && conductor !== undefined ? true : false
        }
        cancelText="Editar"
        onCancel={() => {
          setOpen(false);
        }}
        okText="Guardar"
        onOk={() => {
          setOpen(false);
        }}
        width={700}
        footer={
          <div className="">
            <Button onClick={handleEdit}>Editar</Button>
            <Button type="dashed" onClick={handleSave}>
              Guardar
            </Button>
            <Button danger onClick={showDeleteConfirm}>
              Eliminar
            </Button>
          </div>
        }
      >
        <div className="flex items-center justify-between pb-5">
          <div className="mt-7 space-y-3.5">
            <p>
              <Typography.Text strong>Cod Licencia: </Typography.Text>
              <Tag color="volcano"> {conductor?.licencia_conducir}</Tag>
            </p>

            <p>
              <Typography.Text strong>Nombre: </Typography.Text>
              <Typography.Text>{conductor?.nombres}</Typography.Text>
            </p>
            <p>
              <Typography.Text strong>Apellidos: </Typography.Text>
              <Typography.Text>{conductor?.apellidos}</Typography.Text>
            </p>

            <p>
              <Typography.Text strong>Télefono: </Typography.Text>
              <Typography.Text>{conductor?.telefono}</Typography.Text>
            </p>
            <p>
              <Typography.Text strong>Disponibilidad: </Typography.Text>
              <Tag
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
              <Typography.Text strong>Télefono: </Typography.Text>
              <Typography.Text>{conductor?.telefono}</Typography.Text>
            </p>
            <p>
              <Typography.Text strong>Estado: </Typography.Text>
              <Typography.Text>
                {conductor?.estado_documentario ===
                "Documentos Actualizados" ? (
                  <Tag color="green">
                    {conductor?.estado_documentario}
                    <CheckCircleOutlined className="ml-2 " />
                  </Tag>
                ) : conductor?.estado_documentario === "En Trámite" ? (
                  <Tag color="yellow">
                    {conductor?.estado_documentario}
                    <ClockCircleOutlined className="ml-2 " />
                  </Tag>
                ) : (
                  <Tag color="red">
                    {conductor?.estado_documentario}
                    <CloseCircleOutlined className="ml-2 " />
                  </Tag>
                )}
              </Typography.Text>
            </p>
          </div>
          <Image
            src={
              conductor?.foto_bus !== undefined
                ? conductor?.foto_bus
                : "https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-486.jpg?size=626&ext=jpg"
            }
            className="drop-shadow-xl"
            alt="Shipping Box"
            width={400}
            height={400}
          />
        </div>
      </Modal>
    </div>
  );
}
