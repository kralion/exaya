import type { StepsProps } from "antd";
import { Avatar, List, Modal, Steps, Tag } from "antd";
import React, { useState } from "react";
import style from "./frame.module.css";

const data = [
  {
    title: "Hector Ramirez",
    current: 0,
    conductorInfo: "Documentos actualizados",
    profileIcon: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    disponibilidad: "activo",
  },
  {
    title: "Ramiro Villaverde",
    conductorInfo: "Licencia de conducir en trámite",
    profileIcon: "https://randomuser.me/api/portraits/men/86.jpg",
    current: 1,
    status: "error",
    disponibilidad: "con permiso",
  },
  {
    title: "Julio Rojas",
    conductorInfo: "Documentos actualizados",
    profileIcon: "https://randomuser.me/api/portraits/men/1.jpg",
    current: 2,
    disponibilidad: "vacaciones",
  },
  {
    title: "Danilo Alfaro",
    conductorInfo: "Documentos actualizados",
    profileIcon: "https://randomuser.me/api/portraits/men/46.jpg",
    current: 1,
    disponibilidad: "inactivo",
  },
  {
    title: "Roberto Almirante",
    profileIcon:
      "https://images.unsplash.com/photo-1455354269813-737d9df115bb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=1229aa0db2a9a42022b7669f30784123",
    conductorInfo: "Documentos actualizados",
    current: 2,
    disponibilidad: "activo",
  },
  {
    profileIcon:
      "https://images.unsplash.com/photo-1474533410427-a23da4fd49d0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=ee9537f6365657688885825712e3349d",
    title: "Camilo Paredes",
    conductorInfo: "Documentos actualizados",
    current: 1,
    status: "error",
    disponibilidad: "activo",
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

  return (
    <div className="rounded-lg shadow-xl">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(conductor, index) => (
          <List.Item
            onClick={() => {
              setOpen(true);
            }}
            key={index}
            className="cursor-pointer  rounded-lg duration-200 hover:bg-gray-100"
            style={{
              paddingLeft: 14,
              paddingRight: 14,
            }}
          >
            <List.Item.Meta
              avatar={<Avatar src={conductor.profileIcon} />}
              title={
                <a
                  href="https://www.sutran.gob.pe/informacion-del-conductor-y-bus-de-tu-viaje/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {conductor.title}
                </a>
              }
              description={
                <div className="flex gap-3">
                  <p>{conductor.conductorInfo}</p>

                  <Tag
                    color={
                      conductor.disponibilidad === "activo"
                        ? "green"
                        : conductor.disponibilidad === "inactivo"
                        ? "red"
                        : conductor.disponibilidad === "vacaciones"
                        ? "cyan"
                        : "orange"
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
              current={conductor.current}
              status={conductor.status as StepsProps["status"]}
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
