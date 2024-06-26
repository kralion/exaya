import { PasajesTable } from "@/components/ui/venta-pasajes/pasajes-table";
import { Calendar, FloatButton, Space, Typography } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
const { Text, Title } = Typography;

export default function Boletos() {
  const router = useRouter();
  const [dateQuery, setDateQuery] = useState(dayjs().startOf("day"));

  const onSelect = (newValue: Dayjs) => {
    setDateQuery(newValue.startOf("day"));
  };

  return (
    <>
      <button
        className="absolute left-1 top-4 flex cursor-pointer rounded-full  px-2 py-2 text-amber-500 active:opacity-70"
        onClick={() => router.push("/")}
      >
        <AiOutlineLeft size={25} />
        Atrás
      </button>
      <Space
        direction="vertical"
        className=" w-full gap-10 px-4  py-16 dark:bg-zinc-900 lg:h-screen"
      >
        <Space
          direction="vertical"
          className="flex items-center justify-center lg:items-start"
        >
          <h3 className="text-3xl font-bold  text-amber-500 ">
            Expreso Ayacucho
          </h3>
          <Text type="secondary">
            —Nuestra plataforma de compra de boletos online.
          </Text>
        </Space>
        <div className="flex w-full flex-col items-start justify-between gap-20 lg:flex-row lg:gap-0">
          <Space direction="vertical">
            <Title level={5}>Salidas</Title>
            <PasajesTable dayQuery={dateQuery} />
          </Space>
          <Space direction="vertical">
            <Title level={5}>Búsqueda por Fecha</Title>
            <Calendar
              className=" overflow-auto rounded-lg border shadow duration-300 dark:border-zinc-800  lg:max-w-[410px]"
              fullscreen={false}
              onSelect={onSelect}
            />
          </Space>
        </div>

        <FloatButton.BackTop className="bottom-4 right-4" />
      </Space>
    </>
  );
}
