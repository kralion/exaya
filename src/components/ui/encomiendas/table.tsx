import { columns } from "./columns";
import React from "react";
import { Table, Typography } from "antd";
import { api } from "@/utils/api";
const { Title } = Typography;

export function EncomiendasTable() {
  const { data: encomiendas } = api.encomiendas.getAllEncomiendas.useQuery();

  return (
    <div className="space-y-3.5">
      <Title level={5}>Historial de Encomiendas</Title>
      <Table
        pagination={{
          defaultPageSize: 5,
        }}
        dataSource={encomiendas}
        columns={columns}
      />
    </div>
  );
}
