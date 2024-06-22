import { Card, Slider, type SliderSingleProps, Space, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;

type Props = {
  totalVendidos: number;
  totalReservados: number;
  totalPerdidos: number;
  isLoading: boolean;
};
export function StatsSegments({
  totalVendidos,
  totalReservados,
  totalPerdidos,
  isLoading,
}: Props) {
  const totalAsientos = totalVendidos + totalReservados + totalPerdidos;
  const marks: SliderSingleProps["marks"] = {
    0: "0",
    [totalAsientos]: {
      style: { color: "#f50" },
      label: <strong>{totalAsientos}</strong>,
    },
  };
  return (
    <Card
      loading={isLoading}
      title={
        <Space direction="vertical" className="gap-0">
          <Title className="pt-2" level={4}>
            Monitor de Segmentación
          </Title>
          <Paragraph className="font-light">
            Presentación de los clientes atendidos en un día específico,
            organizados según criterios específicos
          </Paragraph>
        </Space>
      }
    >
      <div>
        <Text>Vendidos</Text>
        <Slider
          value={totalVendidos}
          max={totalAsientos}
          styles={{
            track: { backgroundColor: "#52c41a" },
          }}
          disabled={false}
          marks={marks}
        />
      </div>
      <div>
        <Text>Reservados</Text>
        <Slider
          value={totalReservados}
          styles={{ track: { backgroundColor: "#1890ff" } }}
          max={totalAsientos}
          disabled={false}
          marks={marks}
        />
      </div>
      <div>
        <Text>Perdidos</Text>
        <Slider
          max={totalAsientos}
          styles={{
            track: { backgroundColor: "#f5222d" },
          }}
          value={totalPerdidos}
          disabled={false}
          marks={marks}
        />
      </div>
    </Card>
  );
}
