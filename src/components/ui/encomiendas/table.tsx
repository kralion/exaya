import { columns } from "./columns";
import React from "react";
import { Title } from "@mantine/core";
import { Table } from "antd";
import { useEncomiendasContext } from "@/context/EncomiendasContext";

export function EncomiendasTable() {
  const { encomiendasRegistradas } = useEncomiendasContext();

  return (
    <div className="space-y-3.5">
      <Title order={5}>Historial de Encomiendas</Title>
      <Table
        pagination={{
          defaultPageSize: 5,
        }}
        dataSource={encomiendasRegistradas}
        columns={columns}
      />
    </div>
  );
}
