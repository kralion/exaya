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
import { Image } from "antd";
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
    foto_bus:
      "https://img.freepik.com/premium-psd/bus-sticker-wrapping-mockup-design_417483-1910.jpg?size=626&ext=jpg",
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
    foto_bus:
      "https://image.shutterstock.com/image-photo/white-modern-comfortable-tourist-bus-260nw-2273138663.jpg",
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
    foto_bus:
      "https://image.shutterstock.com/image-photo/white-modern-comfortable-tourist-bus-260nw-2273138663.jpg",
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
    foto_bus:
      "https://image.shutterstock.com/image-photo/white-modern-comfortable-tourist-bus-260nw-2273138663.jpg",
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
    foto_bus:
      "https://image.shutterstock.com/image-photo/white-modern-comfortable-tourist-bus-260nw-2273138663.jpg",
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
  const [isEditing, setIsEditing] = useState(false);

  const openModal = (conductor: IConductor) => {
    setConductor(conductor);
    setOpen(true);
  };
  const handleEdit = () => {
    setIsEditing(true);
    alert("Editando");
  };
  const handleSave = () => {
    setOpen(false);
    setIsEditing(false);
  };

  return (
    <>
      <List
        itemLayout="horizontal"
        className=" w-max  min-w-[500px] rounded-lg border-1 "
        dataSource={data}
        renderItem={(conductor, index) =>
          data.length > 0 ? (
            <List.Item
              onClick={() => {
                openModal(conductor);
              }}
              key={index}
              className="cursor-pointer  rounded-lg  duration-100 hover:bg-zinc-100 hover:shadow-md"
              style={{
                paddingLeft: 14,
                paddingRight: 14,
              }}
            >
              <List.Item.Meta
                avatar={<Avatar src={conductor.foto_perfil} />}
                title={
                  <div>
                    <a
                      href="https://www.sutran.gob.pe/informacion-del-conductor-y-bus-de-tu-viaje/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-2"
                    >
                      {conductor.nombres}
                    </a>
                    {conductor.disponibilidad === true ? (
                      <CheckCircleOutlined className=" rounded-full bg-green-500  text-white" />
                    ) : (
                      <CloseCircleOutlined className=" rounded-full bg-red-500  text-white" />
                    )}
                  </div>
                }
                description={
                  <div className="flex items-center gap-3">
                    <p>{conductor.licencia_conducir}</p>
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
          <Title order={3}>
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
          <div>
            {isEditing ? (
              <Button onClick={handleSave}>Guardar</Button>
            ) : (
              <Button onClick={handleEdit}>Editar</Button>
            )}

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
              <Tag> {conductor?.licencia_conducir}</Tag>
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
              conductor?.foto_bus === undefined
                ? "https://img.freepik.com/free-photo/traffic-vehicle-urban-reflections-city_1112-973.jpg?size=626&ext=jpg"
                : conductor?.foto_bus
            }
            width={300}
            height={200}
            className="h-20 w-40 rounded-lg object-cover "
            alt="Bus Preview"
          />
        </div>
      </Modal>
    </>
  );
}
