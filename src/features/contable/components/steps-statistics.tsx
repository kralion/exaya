import { Steps } from "antd";
import { useCallback, useEffect, useState } from "react";
import { FileText, Luggage, Armchair, RefreshCw } from "lucide-react";

export function EstadisticasNumericas({
  totalBoletosVendidos,
  totalEncomiendasRegistradas,
}: {
  totalBoletosVendidos: number;
  totalEncomiendasRegistradas: number;
}) {
  const [current, setCurrent] = useState(0);

  const handleChangeStep = useCallback(() => {
    setTimeout(() => {
      if (current < 3) {
        setCurrent(current + 1);
      }
    }, 1000);
  }, [current]);

  useEffect(() => {
    handleChangeStep();
  }, [handleChangeStep]);

  return (
    <Steps
      className="grid grid-flow-row grid-cols-4 pl-0.5"
      current={current}
      onChange={handleChangeStep}
      items={[
        {
          title: "Monto Total",
          icon: <RefreshCw className="mx-2 my-5 animate-spin" />,
          description: (
            <span>
              Incluido el % de <strong>IGV</strong>
            </span>
          ),
        },
        {
          title: "Asientos",
          icon: <Armchair className="mx-2 my-5" />,
          description: (
            <span>
              <strong>{totalBoletosVendidos}</strong> vendido(s)
            </span>
          ),
        },
        {
          title: "Registradas",
          icon: <Luggage className="mx-2 my-5" />,
          description: (
            <span>
              <strong>{totalEncomiendasRegistradas}</strong> encomiendas
            </span>
          ),
        },
        {
          title: "Sumatoria",
          icon: <FileText className="mx-2 my-5" />,
          description: "Contabilizado al total",
        },
      ]}
    />
  );
}
