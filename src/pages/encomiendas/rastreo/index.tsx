/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import ParcelSkeleton from "@/components/skeletons/parcel-skeleton";
import EmptyCustomized from "@/components/ui/empty";
import { api } from "@/utils/api";
import { Button, Card, Form, Typography } from "antd";
import { InputOTP } from "antd-input-otp";
import { useEffect, useState } from "react";
import { BsTruck } from "react-icons/bs";
const { Text } = Typography;

type FormValues = {
  codigoRastreo: string;
};

export default function Page() {
  const [form] = Form.useForm();
  const [trackingCode, setTrackingCode] = useState<string>("");
  const [ubicacion, setUbicacion] = useState<string>("");
  const [isInitialRender, setIsInitialRender] = useState<boolean>(true);

  const { data, isLoading, isFetching } =
    api.encomiendas.getEncomiendaByTrackingCode.useQuery(
      {
        codigoRastreo: trackingCode ?? "",
      },
      {
        enabled: trackingCode !== "",
        keepPreviousData: true,
      }
    );
  const handleFinish = (values: FormValues) => {
    const otpString = Array.isArray(values.codigoRastreo)
      ? values.codigoRastreo.join("")
      : values.codigoRastreo;
    setTrackingCode(otpString);
    setIsInitialRender(false);
  };

  useEffect(() => {
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (data?.response?.fechaEnvio && data?.response?.viaje.salida) {
      const diffDays = Math.round(
        Math.abs((now.getTime() - data.response.fechaEnvio.getTime()) / oneDay)
      );

      if (diffDays >= 1) {
        setUbicacion("Destino");
      } else if (
        data.response.fechaEnvio.getTime() <
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        data.response.viaje.salida.getTime()
      ) {
        setUbicacion("Origen");
      } else {
        setUbicacion("En camino");
      }
    }
  }, [data]);

  return (
    <div className="lg:px-auto h-screen w-screen justify-center  px-10 py-12 dark:bg-zinc-900 md:px-6 md:py-16 lg:text-center">
      <div className="grid md:gap-12 lg:gap-8">
        <div className="grid gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight dark:text-white md:text-4xl">
            Rastrea tu Encomienda
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Ingresa el código de rastreo de tu encomienda para ver su estado y
            ubicación actual.
          </p>
          <Form
            className="flex w-full flex-col items-center justify-center lg:w-auto"
            onFinish={handleFinish}
            form={form}
          >
            <Form.Item name="codigoRastreo">
              <InputOTP rootClassName=" flex justify-center items-center gap-2 w-full h-12 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white" />
            </Form.Item>
            <Form.Item>
              <Button
                loading={isFetching}
                type="primary"
                htmlType="submit"
                className="w-full"
              >
                Rastrear
              </Button>
            </Form.Item>
          </Form>
        </div>
        {isInitialRender ? null : isLoading || isFetching ? (
          <ParcelSkeleton />
        ) : trackingCode && data?.response ? (
          <Card className=" lg:mx-64">
            <div className=" grid gap-4 rounded-l  ">
              <div className="flex flex-col justify-between lg:flex-row lg:items-center">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex aspect-square w-12 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
                    <BsTruck className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-medium">
                      Encomienda{" "}
                      <span className="font-mono font-bold">
                        # {data?.response?.serie}-{data?.response?.codigo}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Enviado el{" "}
                      {data?.response?.fechaEnvio?.toLocaleDateString("es-ES")}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 lg:mt-0">
                  <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900/20 dark:text-green-400">
                    {ubicacion}
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col justify-between lg:flex-row lg:items-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Ubicación Actual
                  </div>
                  <div className="font-medium">
                    {ubicacion === "Origen"
                      ? `${data?.response?.viaje.ruta.ciudadOrigen} - ${data?.response?.viaje.ruta.terminalOrigen}`
                      : ubicacion === "Destino"
                      ? `${data?.response?.viaje.ruta.ciudadDestino} - ${data?.response?.viaje.ruta.terminalDestino}`
                      : null}
                  </div>
                </div>
                <div className="flex flex-col justify-between lg:flex-row lg:items-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Estimación de Llegada
                  </div>
                  <div className="font-medium">
                    {data?.response?.viaje.salida.toLocaleDateString("es-ES", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
                <div className="flex flex-col justify-between lg:flex-row lg:items-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Importe Total
                  </div>
                  <div className="font-medium">
                    S/. {data?.response?.precio}.00
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ) : (
          <Card className="mx-10 lg:mx-64">
            <EmptyCustomized />
            <Text type="secondary">
              Verifique su código de rastreo con el de la boleta generada
            </Text>
          </Card>
        )}
      </div>
    </div>
  );
}