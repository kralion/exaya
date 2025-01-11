import { PieChart, Pie, Tooltip } from "recharts";
import React from "react";

type TViajeDiario = {
  id: string;
  boletos: {
    id: string;
    asiento: number;
    pasajeroDni: string;
  }[];
  bus: { asientos: number };
};

const legacyData1 = [
  {
    name: "A. Frontales",
    value: 40,
  },
  {
    name: "A. Medio",
    value: 30,
  },
  {
    name: "A. Traseros",
    value: 30,
  },
  {
    name: "Pasillo",
    value: 20,
  },
  {
    name: "Ventana",
    value: 27,
  },
];
const legacyData2 = [
  {
    name: "Adultos",
    value: 40,
  },
  {
    name: "Niños",
    value: 56,
  },
  {
    name: "Discapacitados",
    value: 39,
  },

  {
    name: "Estudiantes",
    value: 90,
  },
  {
    name: "Tercera Edad",
    value: 80,
  },
];

function clasificarAsientos(
  viajesDiarios: TViajeDiario[]
): Record<string, number> {
  const clasificacion: Record<string, number> = {
    "A. Frontales": 0,
    "A. Medio": 0,
    "A. Finales": 0,
    Pasillo: 0,
    Ventana: 0,
  };

  for (const viaje of viajesDiarios) {
    for (const boleto of viaje.boletos) {
      const asiento = boleto.asiento;
      const totalAsientos = viaje.bus.asientos;

      if (asiento <= totalAsientos * 0.2) {
        if (clasificacion["A. Frontales"] !== undefined) {
          clasificacion["A. Frontales"]++;
        }
      } else if (asiento <= totalAsientos * 0.4) {
        if (clasificacion["A. Medio"] !== undefined) {
          clasificacion["A. Medio"]++;
        }
      } else {
        if (clasificacion["A. Finales"] !== undefined) {
          clasificacion["A. Finales"]++;
        }
      }

      if (asiento % 2 === 0) {
        if (clasificacion.Ventana !== undefined) {
          clasificacion.Ventana++;
        }
      } else {
        if (clasificacion.Pasillo !== undefined) {
          clasificacion.Pasillo++;
        }
      }
    }
  }

  return clasificacion;
}

function clasificarPersona(
  dni: string | undefined
): "Adultos" | "Niños" | "Tercera Edad" {
  const primerDigito = parseInt(dni?.[0] ?? "", 10);

  if (primerDigito >= 0 && primerDigito <= 3) {
    return "Adultos";
  } else if (primerDigito === 4) {
    return "Niños";
  } else if (primerDigito >= 6 && primerDigito <= 9) {
    return "Tercera Edad";
  } else {
    throw new Error("DNI inválido");
  }
}

function clasificarPasajeros(
  viajesDiarios: TViajeDiario[]
): Record<string, number> {
  const clasificacion: Record<string, number> = {
    Adultos: 0,
    Niños: 0,
    "Tercera Edad": 0,
  };

  for (const viaje of viajesDiarios) {
    for (const boleto of viaje.boletos) {
      const categoria = clasificarPersona(boleto.pasajeroDni);
      if (categoria && clasificacion[categoria] !== undefined) {
        clasificacion[categoria]++;
      }
    }
  }

  return clasificacion;
}

function ControlPanePieChart({
  viajesDiarios,
}: {
  viajesDiarios: TViajeDiario[] | undefined;
}) {
  const data01 = Object.entries(clasificarAsientos(viajesDiarios || [])).map(
    ([name, value]) => ({ name, value })
  );
  const data02 = Object.entries(clasificarPasajeros(viajesDiarios || [])).map(
    ([name, value]) => ({ name, value })
  );

  return (
    <PieChart width={260} height={260}>
      <Tooltip
        contentStyle={{
          borderRadius: "7px",
          borderWidth: "1px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <Pie
        data={legacyData1}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#faad14"
      />
      <Pie
        data={legacyData2}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        className="font-semibold text-black"
        innerRadius={60}
        outerRadius={80}
        fill="#a0d911"
        label
      />
    </PieChart>
  );
}

export default ControlPanePieChart;
