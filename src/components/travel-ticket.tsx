import { api } from "@/utils/api";
import { Divider } from "antd";
import { Inter } from "next/font/google";
import { forwardRef, useEffect } from "react";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const TravelTicketPrint = forwardRef<HTMLDivElement, { id: string }>(
  function TravelTicketPrint({ id }, ref) {
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
      <div ref={ref} className="text-black">
        <header className=" flex  items-end justify-between overflow-hidden rounded-t-lg bg-yellow-400 p-4 ">
          <div className="flex items-center gap-3  text-black">
            <img
              alt="Logo"
              src="https://img.icons8.com/?size=50&id=9351&format=png"
            />
            <div className={inter.className}>
              <h2 className="text-lg font-bold">Expreso Ayacucho</h2>
              <h4 className="text-xs">RUC: 20605475427</h4>
              <h4 className="font-mono text-xs">
                Agencia: {data?.response?.usuario.sede.agencia}
              </h4>
            </div>
          </div>
          <div className="flex flex-col items-end text-xs">
            <span>RCEA N°: 20605475427 </span>
            <span>91454845 - 94845845</span>
          </div>
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
              Codigo {data?.response?.codigo}
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
              {data?.response?.fechaRegistro.toLocaleString("es-PE", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
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
              <li>
                La empresa no se responsabiliza por la pérdida de equipaje.
              </li>
              <li>
                El pasajero viaja amparado por el seguro obligatorio accidentes
                de tránsito | SOAT-RIMAC Seguros Reaseguros.
              </li>
              <li>
                El pasajero es responsable de todos los recursos brindados al
                momento de la compra del boleto.
              </li>
            </ul>
          </div>
        </div>
        <hr className="page-break border-0" />
        <footer className="flex justify-between rounded-lg bg-yellow-400  p-4 text-black">
          <div className="flex flex-col justify-around rounded-l-lg">
            <p>Embarque</p>
            <h1 className="font-mono text-4xl font-bold">
              {data?.response?.viaje.salida.toLocaleDateString("es-PE", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </h1>
            <h4 className="font-mono text-xl font-bold">
              {data?.response?.viaje.salida.toLocaleTimeString("es-PE", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </h4>
          </div>
          <div className="text-xs">
            <p className="font-bold ">Codigo : {data?.response?.codigo}</p>
            <p>DNI: {data?.response?.pasajeroDni}</p>
            <p>Destino: {data?.response?.destino}</p>
            <p className="font-mono font-bold">
              Asiento: {data?.response?.asiento}
            </p>
            <p>Importe: S/. {data?.response?.precio.toFixed(2)}</p>
          </div>
        </footer>
      </div>
    );
  }
);

export default TravelTicketPrint;
