import { Card, Tag, Typography } from "antd";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
const { Title } = Typography;
const RADIAN = Math.PI / 180;
const dataKPIUtilidad = [
  { name: "Intermedio", value: 25, color: "#f5222d" },
  { name: "Proceso", value: 45, color: "#fadb14" },
  { name: "Obtenido", value: 35, color: "#52c41a" },
];
const dataKPIEficiencia = [
  { name: "Intermedio", value: 15, color: "#f5222d" },
  { name: "Proceso", value: 43, color: "#fadb14" },
  { name: "Obtenido", value: 42, color: "#52c41a" },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
type needleProps = {
  value: number;
  data: { value: number; color: string }[];
  cx: number;
  cy: number;
  iR: number;
  oR: number;
  color: string;
};

const MIN_VALUE_UTILITY = 10;
const MIN_VALUE_EFFICIENCY = 15;

const needle = ({ value, data, cx, cy, iR, oR, color }: needleProps) => {
  let total = 0;
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

export default function KpiGraphs({
  totalIncome,
  totalAsientos,
  totalVendidos,
}: {
  totalIncome: number;
  totalAsientos: number | undefined;
  totalVendidos: number | undefined;
}) {
  const gastosFijosPorViaje = [
    {
      combustible: 500,
      peajes: 30,
      costoMantenimiento: 100,
      salarioConductor: 200,
      varios: 50,
    },
  ];
  const comisiónAgencia = 0.15 * totalIncome;
  const gastosFijosTotales = gastosFijosPorViaje.reduce(
    (acc, gasto) =>
      acc +
      gasto.combustible +
      gasto.peajes +
      gasto.costoMantenimiento +
      gasto.salarioConductor +
      gasto.varios,
    0
  );
  const margenGananciaNeta =
    totalIncome !== 0
      ? ((totalIncome - gastosFijosTotales - comisiónAgencia) / totalIncome) *
        100
      : MIN_VALUE_UTILITY;

  const margenUtilizacionRecursos =
    totalVendidos && totalAsientos
      ? (totalVendidos / totalAsientos) * 100
      : MIN_VALUE_EFFICIENCY;
  {
    return (
      <Card
        title={
          <Title className="pt-2" level={4}>
            Estadísticas de Indicadores KPI
          </Title>
        }
        className="shadow duration-200 dark:hover:bg-black/50"
      >
        <div>
          <PieChart width={300} height={200}>
            <Tooltip
              contentStyle={{
                borderRadius: "7px",
                borderWidth: "1px",
              }}
            />

            <Pie
              dataKey="value"
              startAngle={180}
              animationDuration={1000}
              endAngle={0}
              data={dataKPIEficiencia}
              cx={cx}
              cy={cy}
              innerRadius={iR}
              outerRadius={oR}
              fill="#f5222d"
              stroke="none"
            >
              {dataKPIEficiencia.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            {needle({
              value: margenUtilizacionRecursos,
              data: dataKPIEficiencia,
              cx: cx,
              cy: cy,
              iR: iR,
              oR: oR,
              color: "#faad14",
            })}
          </PieChart>
          <div className="flex flex-col items-center justify-center gap-3 ">
            <Tag className="ml-5 mt-1 w-fit font-bold ">
              {margenUtilizacionRecursos}%
            </Tag>
            <Tag className="ml-5 mt-1 w-fit">
              <strong>KPI</strong> : Eficiencia Operativa
            </Tag>
          </div>
        </div>
        <div>
          <PieChart width={300} height={200}>
            <Tooltip
              contentStyle={{
                borderRadius: "7px",
                borderWidth: "1px",
              }}
            />

            <Pie
              dataKey="value"
              startAngle={180}
              animationDuration={1000}
              endAngle={0}
              data={dataKPIUtilidad}
              cx={cx}
              cy={cy}
              innerRadius={iR}
              outerRadius={oR}
              fill="#f5222d"
              stroke="none"
            >
              {dataKPIUtilidad.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            {needle({
              value: margenGananciaNeta,
              data: dataKPIUtilidad,
              cx: cx,
              cy: cy,
              iR: iR,
              oR: oR,
              color: "#faad14",
            })}
          </PieChart>
          <div className="mx-auto flex flex-col items-center gap-3 ">
            <Tag className="ml-5 mt-1 w-fit font-bold ">
              {margenGananciaNeta}%
            </Tag>
            <Tag className="ml-5 mt-1">
              <strong>KPI</strong> : Utilidad Empresarial
            </Tag>
          </div>
        </div>
      </Card>
    );
  }
}
