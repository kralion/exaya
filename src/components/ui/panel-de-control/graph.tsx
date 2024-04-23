import React from "react";
import { PT_Sans } from "next/font/google";

const pt_sans = PT_Sans({
  weight: "400",
  subsets: ["latin-ext"],
  preload: true,
});
import {
  AreaChart,
  XAxis,
  Area,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Junio",
    encomiendas: 4000,
    boletos: 2400,
  },
  {
    name: "Julio",
    encomiendas: 3000,
    boletos: 1398,
  },
  {
    name: "Agosto",
    encomiendas: 2000,
    boletos: 4800,
  },
  {
    name: "Septiembre",
    encomiendas: 2780,
    boletos: 3908,
  },
  {
    name: "Octubre",
    encomiendas: 1890,
    boletos: 4800,
  },
  {
    name: "Noviembre",
    encomiendas: 2390,
    boletos: 4800,
  },
  {
    name: "Diciembre",
    encomiendas: 2490,
    boletos: 5300,
  },
];

function ControlPaneGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        className="rounded-xl border-1  duration-200 hover:bg-orange-100/10 hover:shadow-md dark:border-zinc-800  dark:hover:bg-black/50 "
        data={data}
      >
        <Legend
          align="right"
          iconType="circle"
          verticalAlign="top"
          height={10}
        />
        <defs>
          <linearGradient id="colorencomiendas" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1CFF69" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#1CFF69" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorboletos" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4096FF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4096FF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" className={pt_sans.className} />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          contentStyle={{
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "white",
            borderRadius: "10px",
            border: "none",
          }}
        />
        <Area
          type="monotone"
          dataKey="encomiendas"
          stroke="#00E396"
          strokeWidth={4}
          fillOpacity={1}
          fill="url(#colorencomiendas)"
        />
        <Area
          type="monotone"
          dataKey="boletos"
          strokeWidth={4}
          stroke="#4096FF"
          fillOpacity={1}
          fill="url(#colorboletos)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default ControlPaneGraph;
