import React from "react";
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
    name: "Enero",
    encomiendas: 4000,
    boletos: 2400,
  },
  {
    name: "Febrero",
    encomiendas: 3000,
    boletos: 1398,
  },
  {
    name: "Marzo",
    encomiendas: 2000,
    boletos: 9800,
  },
  {
    name: "Abril",
    encomiendas: 2780,
    boletos: 3908,
  },
  {
    name: "Mayo",
    encomiendas: 1890,
    boletos: 4800,
  },
  {
    name: "Junio",
    encomiendas: 2390,
    boletos: 3800,
  },
  {
    name: "Julio",
    encomiendas: 3490,
    boletos: 4300,
  },
];

function ControlPaneGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        style={{
          backgroundColor: "rgba(245, 254, 255,1)",
        }}
        className="rounded-xl shadow-md "
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
            <stop offset="5%" stopColor="#a5e65a" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#a5e65a" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorboletos" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4096FF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4096FF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
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
          stroke="#a5e65a"
          fillOpacity={1}
          fill="url(#colorencomiendas)"
        />
        <Area
          type="monotone"
          dataKey="boletos"
          stroke="#4096FF"
          fillOpacity={1}
          fill="url(#colorboletos)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default ControlPaneGraph;
