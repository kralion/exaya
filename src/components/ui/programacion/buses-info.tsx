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
          cover={<Image src={bus.foto} alt="bus" width={250} />}
          key={bus.placa}
        >
          <Meta
            title={
              <Space className="flex items-center gap-1.5">
                <span>
                  {bus.asientos ? (
                    <BiCheckCircle
                      title="El vehiculo está en recorrido"
                      size={20}
                      className="rounded-full  bg-green-500 text-white duration-200 "
                    />
                  ) : (
                    <BiInfoCircle
                      title="Pasó algo con el vehículo"
                      size={20}
                      className="rounded-full text-red-500 duration-200 hover:bg-red-500 hover:text-white"
                    />
                  )}
                </span>
                <Space className="gap-8 font-normal">
                  {bus.placa}
                  <strong>
                    <Tag color="success"> Bus Cama </Tag>
                  </strong>
                </Space>
              </Space>
            }
            description={
              <Space direction="horizontal">
                <span className="font-normal">
                  {bus.modelo} {bus.asientos} asientos
                </span>
              </Space>
            }
          />
        </Card>
      ))}
    </Space>
  );
}
