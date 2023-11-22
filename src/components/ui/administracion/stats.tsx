import { Card, Slider, Typography } from "antd";

export function StatsSegments() {
  return (
    <Card title="Monitor de actividades" className="hover:shadow-md">
      <Typography.Paragraph>
        Representacion de el numero de clientes atendidos en el dia,
        clasificados respectivamente
      </Typography.Paragraph>
      <div>
        <span className="font-bold">ATENDIDOS</span>
        <Slider
          defaultValue={81}
          trackStyle={{
            backgroundColor: "#52c41a",
          }}
          disabled={false}
          marks={{
            0: "0%",
            100: "100%",
          }}
        />
      </div>
      <div>
        <span className="font-bold">SESGO</span>
        <Slider
          defaultValue={14}
          trackStyle={{
            backgroundColor: "#f5222d",
          }}
          disabled={false}
          marks={{
            0: "0%",
            100: "100%",
          }}
        />
      </div>
      <div>
        <span className="font-bold">PERDIDOS</span>
        <Slider
          defaultValue={5}
          disabled={false}
          marks={{
            0: "0%",
            100: "100%",
          }}
        />
      </div>
    </Card>
  );
}
