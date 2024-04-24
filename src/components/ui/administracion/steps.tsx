import React, { useEffect, useState } from "react";
import { Card, Steps, Typography } from "antd";
const { Title, Text } = Typography;

export default function AdministracionSteps({
  totalVendidos,
  totalAsientos,
  totalIncomeCurrentViaje,
}: {
  totalVendidos: number;
  totalAsientos: number | undefined;
  totalIncomeCurrentViaje: number;
}) {
  const [seatUtilizationRate, setSeatUtilizationRate] = useState(0);

  // TODO: Use a kinda old patterns for calculating the salesTarget
  const salesTarget = 1000;
  useEffect(() => {
    setSeatUtilizationRate((totalVendidos / (totalAsientos || 40)) * 100);
  }, [totalVendidos, totalAsientos]);

  return (
    <Card
      title={
        <Title className="pt-2" level={4}>
          Indices de Administración
        </Title>
      }
      className="shadow duration-200 dark:hover:bg-black/50"
    >
      <Steps
        direction="vertical"
        size="small"
        items={[
          {
            title: "Indice de Utilización",
            status:
              seatUtilizationRate >= 40
                ? "finish"
                : seatUtilizationRate >= 20
                ? "process"
                : "error",
            description: (
              <Text type="secondary">
                Se logró un{" "}
                <Text type="warning" className="font-bold">
                  {seatUtilizationRate}%
                </Text>{" "}
                de utilización de recursos disponibles en el bus. Este índice
                mide la cantidad de asientos ocupados en relación a la cantidad
                de pasajeros.
              </Text>
            ),
          },
          {
            title: "Cumplimiento de Cuota de Ventas",
            status:
              totalIncomeCurrentViaje >= salesTarget
                ? totalIncomeCurrentViaje >= salesTarget * 1.2
                  ? "finish"
                  : "process"
                : "error",
            description: (
              <Text type="secondary">
                Este métrica permite calcular el monto con respecto al
                cumplimiento de la cuota de ventas, lográndose un monto total de{" "}
                <Text type="warning" className="font-bold">
                  S/. {totalIncomeCurrentViaje}
                </Text>
                .
              </Text>
            ),
          },
        ]}
      />
    </Card>
  );
}
