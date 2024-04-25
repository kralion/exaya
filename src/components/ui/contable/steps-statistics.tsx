import { Steps } from "antd";
import { useCallback, useEffect, useState } from "react";
import { FaFileInvoiceDollar, FaLuggageCart } from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

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
          icon: <RxUpdate className="mx-2 my-5 animate-spin" />,
          description: (
            <span>
              Incluido el % de <strong>IGV</strong>
            </span>
          ),
        },
        {
          title: "Asientos",
          icon: <MdEventSeat className="mx-2 my-5" />,
          description: (
            <span>
              <strong>{totalBoletosVendidos}</strong> vendido(s)
            </span>
          ),
        },
        {
          title: "Registradas",
          icon: <FaLuggageCart className="mx-2 my-5" />,
          description: (
            <span>
              <strong>{totalEncomiendasRegistradas}</strong> encomiendas
            </span>
          ),
        },
        {
          title: "Sumatoria",
          icon: <FaFileInvoiceDollar className="mx-2 my-5" />,
          description: "Contabilizado al total",
        },
      ]}
    />
  );
}
