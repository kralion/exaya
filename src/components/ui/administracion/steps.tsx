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
        title: "Versión Web",
        description: "Control total en tu escritori",
      },
      {
        title: "Versión Mobile",
        status: "finish",
        description: "En movimiento con Exaya: Accede a tu ",
      },
    ]}
  />
);

export default AdministracionSteps;
