import { api } from "@/utils/api";
import { forwardRef } from "react";
import { LuLuggage } from "react-icons/lu";
import { Inter } from "next/font/google";
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

    return (
      <div ref={ref}>
        <header className=" flex  items-end justify-between overflow-hidden rounded-t-lg bg-yellow-400 p-4 ">
          <div className="flex items-center gap-2  text-black">
            <img
              alt="Logo"
              src="https://img.icons8.com/?size=50&id=9351&format=png"
            />
            <div className={inter.className}>
              <h2 className="text-lg font-bold">Expreso Ayacucho</h2>
              <h4 className="text-xs">RUC: 20605475427</h4>
              <h4 className="font-mono text-xs">Agencia: Huancayo</h4>
            </div>
          </div>
          <div>
            <h4 className="text-xs italic">RCEA N°: 20605475427</h4>
          </div>
        </header>
        <div className="space-y-8 bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="space-y-2">
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
          <section className="grid grid-cols-2 grid-rows-2  gap-6">
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
              <div className="flex items-center justify-end gap-2">
                <LuLuggage className="h-5 w-5 text-gray-500 " />
                <p className="text-right  font-bold capitalize text-gray-900">
                  {data?.response?.equipaje}
                </p>
              </div>
            </div>
          </section>
          <section className="flex items-center justify-between border-y border-dashed border-white py-2">
            <div className="space-y-0.5">
              <span>OP.NO Gravada</span>
              <span>IGV</span>
              <span>Importe Total</span>
            </div>
            <div className="space-y-0.5 text-right">
              <span>{data?.response?.precio}</span>
              <span>{data?.response?.precio || 40 * 0.18}</span>
              <span className="font-semibold">
                {data?.response?.precio ||
                  40 - (data?.response?.precio || 40 * 0.18)}
              </span>
            </div>
          </section>
          <section className="flex items-center justify-between border-y border-dashed border-white py-2">
            <div className="space-y-0.5">
              <span>Fecha Emisión</span>
              <span>Usuario</span>
              <span>Operacion</span>
            </div>
            <div className="space-y-0.5 text-right">
              <span>
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
              <span className="uppercase">
                {data?.response?.usuario?.nombres}
              </span>
              <span>Venta</span>
            </div>
          </section>
          <div className="space-y-4">
            <p className="font-medium  text-gray-500">Términos y Condiciones</p>

            <p className="text-black">
              Al utilizar este boleto, usted acepta los siguientes términos y
              condiciones:
            </p>
            <ul className="mt-4 list-disc pl-6 text-black">
              <li>El boleto no es reembolsable ni transferible.</li>
              <li>
                El pasajero debe llegar al terminal al menos 1 hora antes de la
                salida.
              </li>
              <li>
                La empresa se reserva el derecho de denegar el embarque por
                cualquier motivo.
              </li>
              <li>
                El pasajero es responsable de todos los impuestos y tasas
                aplicables.
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
        <hr className="my-0.25 page-break border-t border-dashed border-white " />
        <footer className="flex justify-between rounded-lg bg-yellow-400  p-4 text-black">
          <div className="flex flex-col justify-around rounded-l-lg">
            <p className="font-medium ">Boleto de Viaje</p>
            <h1 className="font-mono text-5xl font-bold">
              {data?.response?.serie.toUpperCase()}-{data?.response?.codigo}
            </h1>
          </div>
          <div className="text-sm">
            <p className="font-semibold">{data?.response?.pasajeroDni}</p>
            <p className="font-mono ">
              Fecha Embarque:{" "}
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
            <p className="font-mono font-semibold">
              Asiento: {data?.response?.asiento}
            </p>
            <p>Importe: S/. {data?.response?.precio}</p>
          </div>
        </footer>
      </div>
    );
  }
);

export default TravelTicketPrint;
