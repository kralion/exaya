import React, { useEffect, useState } from "react";
import { Card, Steps, Typography } from "antd";
const { Title, Text } = Typography;

type Props = {
  totalVendidos: number;
  totalAsientos: number | undefined;
  totalIncomeCurrentViaje: number;
  isLoading: boolean;
};

export default function AdministracionSteps({
  totalVendidos,
  totalAsientos,
  totalIncomeCurrentViaje,
  isLoading,
}: Props) {
  const [seatUtilizationRate, setSeatUtilizationRate] = useState(0);

  // TODO: Use a kinda old patterns for calculating the salesTarget
  const salesTarget = 1000;
  useEffect(() => {
    setSeatUtilizationRate((totalVendidos / (totalAsientos || 40)) * 100);
  }, [totalVendidos, totalAsientos]);

  return (
    <Card
      loading={isLoading}
      title={
        <Title className="pt-2" level={4}>
          Métricas de Recursos y Utilidades Percibidas
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
                Este indicador representa la tasa de conversión de recursos en
                el viaje actual. Actualmente se tiene un{" "}
                <Text type="warning" className="font-bold">
                  {seatUtilizationRate.toFixed(2)}%
                </Text>
                , a medida que se acerque al 100% se marcará con un check de
                conformidad.
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
                cumplimiento de la cuota de ventas. Actualmente se tiene un
                monto igual a{" "}
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
