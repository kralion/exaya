import React from "react";
import { Steps } from "antd";
import type { StepProps } from "antd";

const tailwindSyle = {
  step: "text-2xl font-bold",
  description: "text-lg",
  title: "text-3xl font-bold",
};

const DevicesVersionSteps: React.FC = () => (
  <Steps
    direction="vertical"
    style={{
      color: "#000",
      marginTop: "2rem",
    }}
    // className={tailwindSyle as StepProps["className"]}
    current={1}
    items={[
      {
        title: "Versión Web",
        description:
          "Control total en tu escritorio: Exaya te brinda una vista panorámica para gestionar tu transporte de manera eficiente y efectiva",
      },
      {
        title: "Versión Mobile",
        status: "finish",
        description:
          "En movimiento con Exaya: Accede a tu gestión de transporte desde cualquier lugar, en cualquier momento, con nuestra aplicación móvi",
      },
    ]}
  />
);

export default DevicesVersionSteps;
