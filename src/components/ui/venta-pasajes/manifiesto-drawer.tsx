import { Title } from "@mantine/core";
import type { ZodNumberCheck } from "zod";
import React, { useState } from "react";
import type { ColumnsType } from "antd/lib/table";
import { EyeOutlined } from "@ant-design/icons";
import { Table, Button, Drawer, Avatar, List } from "antd";

interface ManifiestoDataType {
  key: React.Key;
  nombres: string;
  asiento: number;
  dni: number extends ZodNumberCheck ? number : string;
}

const manifiestoColumns: ColumnsType<ManifiestoDataType> = [
  {
    title: "Nombres (según DNI o Pasaporte)",
    dataIndex: "nombres",
    key: "nombres",
    responsive: ["lg"],
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Asiento N°",
    dataIndex: "asiento",
    key: "asiento",
    responsive: ["md"],
  },
  {
    title: "DNI",
    dataIndex: "dni",
    key: "dni",
    responsive: ["md"],
  },
];

const data: ManifiestoDataType[] = [
  {
    key: "1",
    nombres: "Hugo Fernandez Saavedra",
    asiento: 32,
    dni: "12345678",
  },
];

export const ManifiestoTable: React.FC = () => (
  <Table columns={manifiestoColumns} dataSource={data} />
);

export const ManifiestoDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={showDrawer}
        className="flex items-center"
        icon={<EyeOutlined />}
      >
        Ver Manifiesto
      </Button>
      <Drawer
        title={
          <div className="flex items-center justify-between ">
            <Title className="text-left" order={4}>
              Manifiesto del Viaje
            </Title>
            <Button type="primary" color="green">
              Imprimir
            </Button>
          </div>
        }
        placement="right"
        onClose={onClose}
        open={open}
        size="large"
      >
        <div className="flex flex-col gap-2">
          <Title order={4}>Conductores</Title>

          <List
            dataSource={[
              {
                id: 1,
                name: "Rafael",
              },
              {
                id: 2,
                name: "Lorenzo",
              },
            ]}
            bordered
            renderItem={(item) => (
              <List.Item
                key={item.id}
                actions={[
                  <a onClick={showDrawer} key={`a-${item.id}`}>
                    Ver Perfil
                  </a>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://randomuser.me/api/portraits/men/46.jpg" />
                  }
                  title={<a href="https://ant.design/index-cn">{item.name}</a>}
                  description="Conductor con licencia A3C"
                />
              </List.Item>
            )}
          />
          <Title className="mt-7" order={4}>
            Pasajeros
          </Title>
          <ManifiestoTable />
        </div>
      </Drawer>
    </>
  );
};
