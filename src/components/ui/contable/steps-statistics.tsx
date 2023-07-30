import React from "react";
import { Steps } from "antd";
import {
  AuditOutlined,
  CompassOutlined,
  UsergroupDeleteOutlined,
  SwitcherOutlined,
} from "@ant-design/icons";

export const EstadisticasNumericas: React.FC = () => (
  <Steps
    className="grid grid-flow-row grid-cols-4 pl-0.5"
    current={2}
    items={[
      {
        title: "Actualizado",
        description: (
          <span>
            Menos <strong>18%</strong> de IGV
          </span>
        ),
        status: "process",
        icon: <CompassOutlined />,
      },
      {
        title: "Asientos",
        icon: <UsergroupDeleteOutlined />,
        status: "process",
        description: (
          <span>
            <strong>78</strong> vendidos
          </span>
        ),
      },
      {
        title: "Sin Rendir",
        icon: <AuditOutlined />,
        status: "process",
        description: "Comisión en caja",
      },
      {
        title: "Registradas",
        icon: <SwitcherOutlined />,
        status: "process",
        description: (
          <span>
            <strong>35</strong> encomiendas
          </span>
        ),
      },
    ]}
  />
);
