import { api } from "@/utils/api";
import { forwardRef } from "react";
import { Inter } from "next/font/google";
import { Divider } from "antd";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const ParcelTicketPrint = forwardRef<HTMLDivElement, { id: string }>(
  function TravelTicketPrint({ id }, ref) {
    const { data } = api.encomiendas.getEncomiendaById.useQuery({ id });
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
            <h4 className="text-xs italic  ">RCEA N°: 20605475427</h4>
          </div>
        </header>
        <div className="space-y-4 bg-white p-4">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-mono text-2xl font-bold text-black">
                Encomienda {data?.response?.serie.toUpperCase()}-
                {data?.response?.codigo}
              </h2>
              <p className="text-gray-500 ">
                Envío a {data?.response?.viaje.ruta.ciudadDestino} - S/.{" "}
                {data?.response?.precio.toFixed(2)}
              </p>
            </div>
          </div>
          <section className="flex w-full justify-between ">
            <div>
              <p className="  text-gray-500">Remitente</p>
              <div>
                <p className="font-bold capitalize  text-gray-900">
                  {data?.response?.remitenteNombres}{" "}
                  {data?.response?.remitenteApellidos}
                </p>
                <p className="text-gray-500 ">
                  DNI: {data?.response?.remitenteDni}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="  text-gray-500">Destinatario</p>
              <div>
                <p className="font-bold capitalize  text-gray-900">
                  {data?.response?.destinatarioNombres}{" "}
                  {data?.response?.destinatarioApellidos}
                </p>
                <p className="text-gray-500 ">
                  DNI: {data?.response?.destinatarioDni}
                </p>
              </div>
            </div>
          </section>

          <div>
            <p className="  text-gray-500">Descripción</p>
            <p className=" font-bold capitalize text-gray-900">
              {data?.response?.descripcion}
            </p>
          </div>
          <Divider />
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
          <Divider />
          <div className=" flex flex-col gap-0.5">
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
            <span>Operacion</span>
          </div>
          <div className="space-y-4">
            <p className="font-medium  text-gray-500">Términos y Condiciones</p>

            <p className="text-black">
              Al utilizar este boleto, usted acepta los siguientes términos y
              condiciones:
            </p>
            <ul className="mt-4 list-disc pl-6 text-black">
              <li>El boleto no es reembolsable ni transferible.</li>
              <li>
                El unico ha recoger la encomienda es el destinatario con su DNI
                y no se aceptan terceros.
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
                La encomienda puede permanecer en la agencia un máximo de 10
                días calendario.
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
        <Divider dashed className="page-break" />
        <footer className="flex justify-between rounded-lg bg-yellow-400 p-4  text-black">
          <div className="flex flex-col justify-around rounded-l-lg">
            <p className="font-medium ">Ticket</p>
            <h1 className="font-mono text-5xl font-bold">
              {data?.response?.serie.toUpperCase()}-{data?.response?.codigo}
            </h1>
          </div>
          <div className="text-xs">
            <p className="font-bold ">Remite: {data?.response?.remitenteDni}</p>
            <p className="font-bold ">
              Para: {data?.response?.destinatarioDni}
            </p>
            <p>Destino: {data?.response?.viaje.ruta.ciudadDestino}</p>
            <p> Importe : S/. {data?.response?.precio.toFixed(2)}</p>
          </div>
        </footer>
      </div>
    );
  }
);

export default ParcelTicketPrint;
