import type { StepsProps } from "antd";
import { Avatar, List, Modal, Steps } from "antd";
import React, { useState } from "react";

const data = [
  {
    title: "Hector Ramirez",
    current: 0,
    conductorInfo:
      "Conductor que posee todos sus documentos al dia, lo puede visitar en la SUTRAN ",
    sutranLink: " https://sutran.gob.pe",
  },
  {
    title: "Ramiro Villaverde",
    conductorInfo: "Conductor que posee todos sus documentos al dia.",
    current: 1,
    status: "error",
    sutranLink: " https://sutran.gob.pe",
  },
  {
    title: "Julio Rojas",
    conductorInfo: "Conductor que posee todos sus documentos al dia.",
    current: 2,
    sutranLink: " https://sutran.gob.pe",
  },
  {
    title: "Danilo Alfaro",
    conductorInfo: "Conductor que posee todos sus documentos al dia.",
    current: 1,
    sutranLink: " https://sutran.gob.pe",
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
  function handleConductorInfoModal(status: boolean) {
    setOpen(status);
    return (
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(status)}
        onCancel={() => setOpen(status)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    );
  }
  return (
    <div className="rounded-lg shadow-xl">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => handleConductorInfoModal}
            className="cursor-pointer  rounded-lg duration-200 hover:scale-105 hover:bg-gray-200"
            style={{
              paddingLeft: 14,
              paddingRight: 14,
            }}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description={
                <div>
                  <p>{item.conductorInfo}</p>
                  <a href={item.sutranLink} target="_blank" rel="noreferrer">
                    {item.sutranLink}
                  </a>
                </div>
              }
            />
            <Steps
              style={{ marginTop: 8 }}
              type="inline"
              current={item.current}
              status={item.status as StepsProps["status"]}
              items={items}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
