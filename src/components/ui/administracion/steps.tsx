import React, { useCallback, useState } from "react";
import { Card, Steps, Typography } from "antd";
import { useNotification } from "@/context/NotificationContext";
const { Title } = Typography;

export default function AdministracionSteps() {
  const [current, setCurrent] = useState(0);
  const { openNotification } = useNotification();
  const handleAdministracionSteps = useCallback(() => {
    setTimeout(() => {
      if (current < 2) {
        setCurrent(current + 1);
      }
    }, 3000);
    if (current === 2) {
      openNotification({
        message: "Indices Actualizados",
        description:
          "Los indices de administración han sido actualizados correctamente",
        type: "success",
        placement: "bottomRight",
      });
    }
  }, [current, openNotification]);
  return (
    <Card
      title={
        <Title className="pt-2" level={4}>
          Indices de Administración
        </Title>
      }
      className="duration-200 dark:hover:bg-black/50"
    >
      <Steps
        direction="vertical"
        size="small"
        onChange={handleAdministracionSteps}
        current={current}
        items={[
          {
            title: "Indice de refraccion",
            description: (
              <p>
                Esta cumplimiento representa el <strong>16.85%</strong> de la
                meta, y se encuentra en el rango de 0.00% a{" "}
                <strong>25.00%</strong>,
              </p>
            ),
          },
          {
            title: "Cumplimiento de Cuota de Ventas",
            description: (
              <p>
                Al igual que el indice anterior, este en especifico sirve para
                medir el cumplimiento de la cuota de ventas, y se encuentra en
                el rango de 0.00% a <strong>80.00%</strong>
              </p>
            ),
          },
        ]}
      />
    </Card>
  );
}
