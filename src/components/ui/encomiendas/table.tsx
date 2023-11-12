import { columns } from "./columns";
import React from "react";
import { Table, Typography } from "antd";
import { useEncomiendasContext } from "@/context/EncomiendasContext";
const { Title } = Typography;

export function EncomiendasTable() {
  const { encomiendasRegistradas } = useEncomiendasContext();

  return (
    <div className="space-y-3.5">
      <Title level={5}>Historial de Encomiendas</Title>
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
