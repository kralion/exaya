import React from "react";
import { Steps } from "antd";
import type { StepProps } from "antd";

const tailwindSyle = {
  step: "text-2xl font-bold",
  description: "text-lg",
  title: "text-3xl font-bold",
};

const AdministracionSteps: React.FC = () => (
  <Steps
    direction="vertical"
    size="small"
    style={{
      color: "#000",
      marginTop: "2rem",
    }}
    // className={tailwindSyle as StepProps["className"]}
    current={1}
    items={[
      {
        title: "Indice de refraccion",
        description:
          " Esta cumplimiento representa el 16.85% de la meta, y se encuentra en el rango de 0.00% a 25.00%",
        status: "finish",
      },
      {
        title: "Cumplimiento de Cuota de Ventas",
        status: "finish",
        description:
          "Al igual que el indice anterior, este en especifico sirve para medir el cumplimiento de la cuota de ventas, y se encuentra en el rango de 0.00% a 80.00%",
      },
    ]}
  />
);

export default AdministracionSteps;
