import React from "react";
import { Steps } from "antd";

const AdministracionSteps: React.FC = () => (
  <Steps
    direction="vertical"
    size="small"
    style={{
      marginTop: "1.5rem",
    }}
    current={1}
    items={[
      {
        title: "Indice de refraccion",
        description: (
          <p>
            Esta cumplimiento representa el <strong>16.85%</strong> de la meta,
            y se encuentra en el rango de 0.00% a <strong>25.00%</strong>,
          </p>
        ),
        status: "finish",
      },
      {
        title: "Cumplimiento de Cuota de Ventas",
        status: "finish",
        description: (
          <p>
            Al igual que el indice anterior, este en especifico sirve para medir
            el cumplimiento de la cuota de ventas, y se encuentra en el rango de
            0.00% a <strong>80.00%</strong>
          </p>
        ),
      },
    ]}
  />
);

export default AdministracionSteps;
