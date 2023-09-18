import React from "react";
import { Steps } from "antd";
import { RxUpdate } from "react-icons/rx";
import { MdEventSeat } from "react-icons/md";
import { FaFileInvoiceDollar, FaLuggageCart } from "react-icons/fa";

export const EstadisticasNumericas: React.FC = () => (
  <Steps
    className="grid grid-flow-row grid-cols-4 pl-0.5"
    current={2}
    items={[
      {
        title: "Actualizado",
        icon: (
          <RxUpdate
            style={{
              WebkitAnimation: "spin 3s linear infinite",
            }}
            className="my-5 mx-2"
          />
        ),
        description: (
          <span>
            Menos <strong>18%</strong> de IGV
          </span>
        ),
        status: "finish",
      },
      {
        title: "Asientos",
        icon: <MdEventSeat className="my-5 mx-2" />,
        status: "finish",
        description: (
          <span>
            <strong>78</strong> vendidos
          </span>
        ),
      },
      {
        title: "Sin Rendir",
        icon: <FaFileInvoiceDollar className="my-5 mx-2" />,
        status: "finish",
        description: "Comisión en caja",
      },
      {
        title: "Registradas",
        icon: <FaLuggageCart className="my-5 mx-2" />,
        status: "finish",
        description: (
          <span>
            <strong>35</strong> encomiendas
          </span>
        ),
      },
    ]}
  />
);
