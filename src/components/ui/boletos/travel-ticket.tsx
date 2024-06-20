import { api } from "@/utils/api";
import { Divider } from "antd";
import { Inter } from "next/font/google";
import { useEffect } from "react";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export function OnlineTravelTicket({ id }: { id: string }) {
  const { data, refetch } = api.boletos.getBoletosById.useQuery({ id });
  useEffect(() => {
    const fetchData = async () => {
      await refetch();
    };

    void fetchData();
  }, [id, refetch]);
  if (!id) {
    return null;
  }
  if (data?.response === null) {
    return null;
  }

  const pricewithIgv = 0;
  const total = data?.response?.precio ?? 0 + pricewithIgv;

  return (
    <div className="text-black">
      <header className="rounded-t-lg bg-gray-100 pt-3">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="text-xl font-bold text-gray-800">Expreso Ayacucho</h2>
          <img
            alt="Logo"
            src="https://img.icons8.com/?size=50&id=9351&format=png"
            className="h-12 w-12 text-center"
          />
          <p className="text-xs text-gray-600">RUC: 20605475427</p>
        </div>
        <div className="mb-3 text-center text-xs text-gray-700">
          <p>939966539-938863193</p>
          <p>Jr. Angaraes Nro. 223 Int 002</p>
          <p>Junín - Huancayo - Huancayo</p>
        </div>
        <Divider className="my-1" />
        <h3 className="text-center font-semibold text-gray-800">
          Boleta de Venta Electrónica {data?.response?.codigo}
        </h3>
        <Divider className="my-1" />
      </header>

      <div className="space-y-2 bg-white p-4 text-sm">
        <section>
          <p className="flex items-center justify-between">
            <span className="font-mono text-2xl font-bold text-black">
              EMBARQUE{" "}
              {data?.response?.viaje.salida.toLocaleDateString("es-PE", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
            <span className="font-mono text-2xl font-bold text-black">
              {data?.response?.viaje.salida.toLocaleTimeString("es-PE", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </span>
          </p>
          <p className="text-sm text-gray-500 ">
            Codigo {data?.response?.codigo.toUpperCase()}
          </p>
        </section>
        <section className="grid grid-cols-3 gap-2">
          <div>
            <p className=" text-gray-500">Origen</p>
            <p className="font-bold  uppercase text-gray-900">
              {data?.response?.viaje.ruta.ciudadOrigen}
            </p>
          </div>
          <div />
          <div className="text-right">
            <p className=" text-gray-500">Destino</p>
            <p className="font-bold  uppercase text-gray-900">
              {data?.response?.destino}
            </p>
          </div>
          <div className="col-span-2">
            <p className=" text-gray-500">Pasajero</p>
            <p className="font-bold  uppercase text-gray-900">
              {data?.response?.pasajeroNombres}{" "}
              {data?.response?.pasajeroApellidos}
            </p>
          </div>
          <div className="text-right">
            <p className=" text-gray-500">Asiento</p>
            <p className="font-bold  uppercase text-gray-900">
              {data?.response?.asiento}
            </p>
          </div>
        </section>

        <Divider />
        <section className="flex items-center justify-between  text-xs">
          <div className="flex flex-col gap-0.5">
            <span>OP.NO Gravada</span>
            <span>IGV</span>
            <span>Importe Total</span>
          </div>
          <div className="flex flex-col justify-end gap-0.5 text-right">
            <span>S/. {data?.response?.precio.toFixed(2)}</span>
            <span>S/. {pricewithIgv.toFixed(2)}</span>
            <span className="font-semibold">S/. {total.toFixed(2)}</span>
          </div>
        </section>
        <Divider />
        <div className="flex flex-col gap-0.5 text-xs">
          <span>
            Fecha y Hora Emisión:{" "}
            {new Date()
              .toLocaleString("es-PE", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
              })
              .replace(/\//g, "-")}
          </span>
          <span>
            Usuario: {data?.response?.usuario?.nombres} | Operacion: Venta
          </span>
        </div>
        <div className="space-y-4 text-xs">
          <p className="  text-sm text-gray-500">Términos y Condiciones</p>

          <p className="text-black">
            Al utilizar este boleto, usted acepta los siguientes términos y
            condiciones:
          </p>
          <ul className="mt-4  list-disc pl-6 text-black">
            <li>
              El pasajero debe llegar al terminal al menos 1 hora antes de la
              salida y para postergaciones comunicar 6 horas antes.
            </li>
            <li>La empresa no se responsabiliza por la pérdida de equipaje.</li>
            <li>
              El pasajero viaja amparado por el seguro obligatorio accidentes de
              tránsito | SOAT-RIMAC Seguros Reaseguros.
            </li>
            <li>
              El pasajero es responsable de todos los recursos brindados al
              momento de la compra del boleto.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
