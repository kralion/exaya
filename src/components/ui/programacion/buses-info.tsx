import { api } from "@/utils/api";
import { Card, Image, Space, Tag } from "antd";
import { BiCheckCircle, BiInfoCircle } from "react-icons/bi";

const { Meta } = Card;

export function BusesInformacion() {
  const { data: buses, isLoading } = api.buses.getAllBuses.useQuery();
  return (
    <Space className="grid grid-flow-row grid-cols-2 gap-4">
      {buses?.map((bus) => (
        <Card
          className="shadow-lg dark:hover:bg-black/50"
          loading={isLoading}
          cover={<Image src={bus.foto} alt="bus" />}
          key={bus.placa}
        >
          <Meta
            title={
              <Space className="flex items-center gap-1.5">
                <Space className="gap-8 font-normal">
                  {bus.placa}
                  <strong>
                    <Tag color="success"> {bus.asientos} asientos </Tag>
                  </strong>
                </Space>
              </Space>
            }
            description={
              <Space direction="horizontal">
                <span className="font-normal">{bus.modelo}</span>
              </Space>
            }
          />
        </Card>
      ))}
    </Space>
  );
}
