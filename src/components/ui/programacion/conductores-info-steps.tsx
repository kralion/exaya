import type { IConductor } from "@/interfaces";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Title } from "@mantine/core";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import {
  Avatar,
  Button,
  Empty,
  Image,
  List,
  Modal,
  Steps,
  Tag,
  Typography,
} from "antd";
import { useState } from "react";
import { api } from "@/utils/api";

const { confirm } = Modal;

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
  const [conductor, setConductor] = useState<IConductor | null>();
  const { data: conductores } = api.conductores.getAllConductores.useQuery();

  const showDeleteConfirm = () => {
    confirm({
      title: "Estas seguro de eliminar a este conductor ?",
      icon: <ExclamationCircleFilled />,
      content: "Todos los datos serán eliminados",
      okText: "Sí",
      okType: "danger",
      cancelText: "No",
      // onOk() {
      //   typeof conductor !== "undefined" &&
      //     data.splice(
      //       data.findIndex((item) => item.id === conductor?.id),
      //       1
      //     );

      //   setOpen(false);
      // },
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
        dataSource={conductores}
        renderItem={(conductor, index) =>
          conductores?.length > 0 ? (
            <List.Item
              // onClick={() => {
              //   openModal(conductor);
              // }}
              key={index}
              className="cursor-pointer  rounded-lg  duration-100 hover:bg-zinc-100 hover:shadow-md"
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
                      {conductor.cliente.nombres}
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
                    <p>{conductor.licencia}</p>
                  </div>
                }
              />
              <Steps
                style={{ marginTop: 8 }}
                type="inline"
                current={
                  conductor.tipoLicencia === "A2B"
                    ? 2
                    : conductor.tipoLicencia === "A3B"
                    ? 1
                    : 0
                }
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
        title={<Title order={3}>Información del Conductor</Title>}
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
        <hr className="mb-2" />
        <div className="flex items-center justify-between p-3">
          <div className="mt-7 space-y-3">
            <p>
              <Typography.Text strong>Cod Licencia : </Typography.Text>
              <Tag> {conductor?.licencia_conducir}</Tag>
            </p>

            <p>
              <Typography.Text strong>Nombre : </Typography.Text>
              <Typography.Text>{conductor?.nombres}</Typography.Text>
            </p>
            <p>
              <Typography.Text strong>Apellidos : </Typography.Text>
              <Typography.Text>{conductor?.apellidos}</Typography.Text>
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
            <p>
              <Typography.Text strong>Documentos : </Typography.Text>
              <Typography.Text>
                {conductor?.estado_documentario ===
                "Documentos Actualizados" ? (
                  <Tag color="green">{conductor?.estado_documentario}</Tag>
                ) : conductor?.estado_documentario === "En Trámite" ? (
                  <Tag color="yellow">{conductor?.estado_documentario}</Tag>
                ) : (
                  <Tag color="red">{conductor?.estado_documentario}</Tag>
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
            className="rounded-lg object-cover "
            alt="Bus Preview"
          />
        </div>
      </Modal>
    </>
  );
}
