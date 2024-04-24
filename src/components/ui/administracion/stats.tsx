import { Card, Slider, Space, Typography } from "antd";
const { Title, Paragraph } = Typography;

export function StatsSegments() {
  return (
    <Card
      title={
        <Space direction="vertical" className="gap-0">
          <Title className="pt-2" level={4}>
            Monitor de Segmentos
          </Title>{" "}
          <Paragraph className="font-light">
            Representacion de el numero de clientes atendidos en el dia,
            clasificados respectivamente
          </Paragraph>
        </Space>
      }
      className="duration-200 dark:hover:bg-black/50"
    >
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
