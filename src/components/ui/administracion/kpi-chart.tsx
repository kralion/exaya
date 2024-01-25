import { Tag } from "antd";
import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const RADIAN = Math.PI / 180;

const data = [
  { name: "NCF", value: 14, color: "#f5222d" },
  { name: "OPP", value: 34, color: "#FAAD14" },
  { name: "CUM", value: 52, color: "#52c41a" },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 82.07;

type needleProps = {
  value: number;
  data: any;
  cx: number;
  cy: number;
  iR: number;
  oR: number;
  color: string;
};

const needle = ({ value, data, cx, cy, iR, oR, color }: needleProps) => {
  let total = 0;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  data?.forEach((v: { value: number }) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    // eslint-disable-next-line react/jsx-key
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    // eslint-disable-next-line react/jsx-key
    <path
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
};

export default function KpiChart() {
  {
    return (
      <div className="flex flex-col text-center">
        <PieChart width={300} height={200}>
          <Tooltip
            contentStyle={{
              backgroundColor: "#DDEECC",
              borderRadius: "5px",
              borderWidth: "1px",
              opacity: "revert",
              borderColor: "#4396D7",
            }}
          />

          <Pie
            dataKey="value"
            startAngle={180}
            animationDuration={1000}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#f5222d"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {needle({
            value: value,
            data: data,
            cx: cx,
            cy: cy,
            iR: iR,
            oR: oR,
            color: "#faad14",
          })}
        </PieChart>
        <div className="flex flex-col items-center justify-center gap-3 ">
          <Tag color="gold-inverse" className="ml-2 mt-1 w-fit font-bold ">
            82.07%
          </Tag>

          <Tag className="ml-5 mt-1 w-fit">
            {" "}
            <strong>KPI</strong> : Eficiencia Operativa
          </Tag>
        </div>
      </div>
    );
  }
}
