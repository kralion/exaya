import type { IConductor } from "@/interfaces";
import type { StepsProps } from "antd";
import { Avatar, List, Modal, Steps, Tag } from "antd";
import React, { useState } from "react";
import style from "./frame.module.css";

const data: IConductor[] = [
  {
    id: 1,
    created_at: "2023-08-23T00:00:00Z",
    nombres: "Hector",
    nivel: 0,
    apellidos: "Ramirez",
    dni: "12345678",
    telefono: "+123456789",
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

  const openModal = (conductor: IConductor) => {
    setOpen(true);
  };

  return (
    <div className="rounded-lg shadow-xl">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(conductor, index) => (
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
                    color={conductor.disponibilidad === true ? "green" : "red"}
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
        )}
      />

      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        cancelText="Editar"
        onCancel={() => {
          setOpen(false);
        }}
        okText="Guardar"
        onOk={() => {
          setOpen(false);
        }}
        width={1000}
      >
        <span>Conductor Info </span>
      </Modal>
    </div>
  );
}
