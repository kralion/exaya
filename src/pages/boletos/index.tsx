import { PasajesTable } from "@/components/ui/venta-pasajes/pasajes-table";
import { Calendar, Flex, FloatButton, Space, Typography } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import { useState } from "react";
const { Text } = Typography;

export default function Boletos() {
  const [dateQuery, setDateQuery] = useState(dayjs().startOf("day"));

  const onSelect = (newValue: Dayjs) => {
    setDateQuery(newValue.startOf("day"));
  };

  return (
    <Flex vertical gap={46} className="p-10 dark:bg-zinc-900">
      <Space direction="vertical">
        <h3 className="text-3xl font-bold  text-amber-500 ">
          Expreso Ayacucho
        </h3>
        <Text type="secondary">
          —Nuestra plataforma de compra de boletos online.
        </Text>
      </Space>
      <Flex justify="space-between">
        <PasajesTable dayQuery={dateQuery} />
        <Calendar
          className="w-1/4 rounded-lg border  shadow duration-300 hover:shadow-lg"
          fullscreen={false}
          onSelect={onSelect}
        />
      </Flex>
      <FloatButton.BackTop className="bottom-4 right-4" />
    </Flex>
  );
}
