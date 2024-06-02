/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "@/utils/api";
import { Button, Card, Form } from "antd";
import { InputOTP } from "antd-input-otp";
import { useEffect, useState } from "react";
import { BsTruck } from "react-icons/bs";

type FormValues = {
  codigoRastreo: string;
};

export default function Page() {
  const [form] = Form.useForm();
  const [trackingCode, setTrackingCode] = useState<string>("");
  const [ubicacion, setUbicacion] = useState<string>("");
  const { data, isLoading } =
    api.encomiendas.getEncomiendaByTrackingCode.useQuery({
      codigoRastreo: trackingCode,
    });
  const handleFinish = (values: FormValues) => {
    const otpString = Array.isArray(values.codigoRastreo)
      ? values.codigoRastreo.join("")
      : values.codigoRastreo;
    setTrackingCode(otpString);
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
    <div className="h-screen w-screen justify-center  px-96 py-12 text-center dark:bg-zinc-900 md:px-6 md:py-16">
      <div className="grid gap-8 md:gap-12">
        <div className="grid gap-4">
          <h1 className="text-3xl font-bold tracking-tight dark:text-white md:text-4xl">
            Rastrea tu Encomienda
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Ingresa el código de rastreo de tu encomienda para ver su estado y
            ubicación actual.
          </p>
          <Form
            className="flex flex-col items-center justify-center"
            onFinish={handleFinish}
            form={form}
          >
            <Form.Item name="codigoRastreo">
              <InputOTP inputType="alphabet-numeric" />
            </Form.Item>
            <Form.Item>
              <Button
                loading={isLoading}
                type="primary"
                htmlType="submit"
                className="w-full"
              >
                Rastrear
              </Button>
            </Form.Item>
          </Form>
        </div>
        {!trackingCode && data?.status === "success" ? null : ( // <ParcelSkeleton />
          <Card className="mx-64" loading={isLoading}>
            <div className=" grid gap-4 rounded-l  ">
              <div className="flex items-center justify-between">
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
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900/20 dark:text-green-400">
                    {ubicacion}
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
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
                <div className="flex items-center justify-between">
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
                <div className="flex items-center justify-between">
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
        )}
      </div>
    </div>
  );
}
