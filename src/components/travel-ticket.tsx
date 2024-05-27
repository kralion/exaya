import { api } from "@/utils/api";
import { forwardRef } from "react";
import { LuLuggage } from "react-icons/lu";
import { Inter } from "next/font/google";
import { Divider } from "antd";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const TravelTicketPrint = forwardRef<HTMLDivElement, { id: string }>(
  function TravelTicketPrint({ id }, ref) {
    const { data } = api.boletos.getBoletosById.useQuery({ id });
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
                Agencia: {data?.response?.usuario.sedeDelegacion}
              </h4>
            </div>
          </div>
          <div>
            <h4 className="text-xs italic">RCEA N°: 20605475427</h4>
          </div>
        </header>
        <div className="space-y-4 bg-white p-4">
          <div className="mb-6 flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="font-mono text-2xl font-bold text-black">
                BOLETA {data?.response?.serie.toUpperCase()}-
                {data?.response?.codigo}
              </h2>
              <div>
                <p className="text-gray-500 ">
                  Salida a {data?.response?.viaje.ruta.ciudadDestino} - S/.{" "}
                  {data?.response?.precio}
                </p>
                <p className="font-semibold">
                  Asiento {data?.response?.asiento}
                </p>
              </div>
            </div>
            <div className="rounded-full  bg-gray-100 px-4 py-2">
              <p className="font-mono  text-xs font-medium text-gray-600">
                {data?.response?.viaje.salida.toLocaleDateString("es-PE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
          <section className="grid grid-cols-2 grid-rows-2  gap-4">
            <div>
              <p className=" text-gray-500">Origen</p>
              <p className="font-bold  uppercase text-gray-900">
                {data?.response?.viaje.ruta.ciudadOrigen}
              </p>
            </div>
            <div className="text-right">
              <p className=" text-gray-500">Destino</p>
              <p className="font-bold  uppercase text-gray-900">
                {data?.response?.viaje.ruta.ciudadDestino}
              </p>
            </div>

            <div>
              <p className="font-medium  text-gray-500">Pasajero</p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-bold capitalize  text-gray-900">
                    {data?.response?.pasajeroNombres}{" "}
                    {data?.response?.pasajeroApellidos}
                  </p>
                  <p className="text-gray-500 ">
                    DNI: {data?.response?.pasajeroDni}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium  text-gray-500">Equipaje</p>
              <p className="text-right  font-bold capitalize text-gray-900">
                {data?.response?.equipaje}
              </p>
            </div>
          </section>
          <Divider className="page-break" />
          <section className="flex items-center justify-between ">
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
          <Divider className="page-break" />
          <div className="space-y-0.5">
            <span>
              Fecha y Hora Emisión:
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
          <div className="space-y-4">
            <p className="font-medium  text-gray-500">Términos y Condiciones</p>

            <p className="text-black">
              Al utilizar este boleto, usted acepta los siguientes términos y
              condiciones:
            </p>
            <ul className="mt-4 list-disc pl-6 text-black">
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
              <li>
                Para cualquier consulta, scanee el código QR para acceder al
                libro de reclamaciones.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center  border  bg-gray-100 p-4">
          <div className="flex h-40 w-40  items-center justify-center rounded-lg bg-white shadow-md">
            <img
              alt="Código QR"
              className="h-full w-full object-contain"
              height="150"
              src="https://i.ibb.co/9NNjkF8/qr-code-exaya.png"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
          </div>
        </div>
        <section className="rounded-b-lg bg-yellow-400 text-center font-mono">
          <span className="text-xs  text-black">
            Atención al Cliente: 91454845 - 94845845
          </span>
        </section>
        <Divider className="page-break" dashed />
        <footer className="flex justify-between rounded-lg bg-yellow-400  p-4 text-black">
          <div className="flex flex-col justify-around rounded-l-lg">
            <p className="font-medium ">Boleto de Viaje</p>
            <h1 className="font-mono text-5xl font-bold">
              {data?.response?.serie.toUpperCase()}-{data?.response?.codigo}
            </h1>
          </div>
          <div className="text-xs">
            <p className="font-bold">DNI: {data?.response?.pasajeroDni}</p>
            <p className="font-mono ">
              Embarque:{" "}
              {data?.response?.viaje.salida.toLocaleDateString("es-PE", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
            <p>
              Ruta: {data?.response?.viaje.ruta.ciudadOrigen}-
              {data?.response?.viaje.ruta.ciudadDestino}
            </p>
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
