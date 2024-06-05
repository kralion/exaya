import { api } from "@/utils/api";
import { forwardRef } from "react";
import { Inter } from "next/font/google";
import { Divider, Tag } from "antd";
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
          <div className="flex flex-col items-end text-xs">
            <span>RCEA N°: 20605475427 </span>
            <span>91454845 - 94845845</span>
          </div>
        </header>
        <div className=" bg-white p-4">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <h2 className="font-mono text-2xl font-bold text-black">
                Encomienda {data?.response?.serie.toUpperCase()}-
                {data?.response?.codigo}
              </h2>
            </div>
          </div>
          <p>
            <span className="  text-gray-500">Remitente : </span>
            <span className="font-bold capitalize  text-gray-900">
              {data?.response?.remitenteNombres}{" "}
              {data?.response?.remitenteApellidos}
            </span>
            <div></div>
          </p>
          <p>
            <span className="  text-gray-500">Destinatario : </span>

            <span className="font-bold capitalize  text-gray-900">
              {data?.response?.destinatarioNombres}{" "}
              {data?.response?.destinatarioApellidos}
            </span>
          </p>
          <p>
            <span className="  text-gray-500">Destino : </span>
            <span>
              {data?.response?.destino === "Huanta"
                ? "Huanta - Agencia Jr. Gervacio Santillana"
                : data?.response?.destino === "Ayacucho"
                ? "Ayacucho - Counter Terminal Terrestre"
                : "Huancayo - Agencia Jr. Angaraes"}
            </span>
          </p>
          <p>
            <span className="  text-gray-500">Descripción : </span>
            <span className="  ">{data?.response?.descripcion}</span>
          </p>
          {data?.response?.factura && (
            <p>
              <span className="  text-gray-500">Razón Social : </span>
              <span className="  ">{data?.response?.empresa}</span>
            </p>
          )}
          {data?.response?.factura && (
            <p>
              <span className="  text-gray-500">RUC : </span>
              <span className="  ">{data?.response?.ruc}</span>
            </p>
          )}
          <p>
            <span className="  text-gray-500">Codigo de Rastreo : </span>
            <span className="font-mono">{data?.response?.codigoRastreo}</span>
          </p>

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

          <div className="space-y-4 text-xs">
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
            </ul>
            <p className="pt-1">
              Para rastrear su encomienda, scanee el código QR e ingrese su
              codigo de rastreo
            </p>
          </div>
        </div>
        <div className="flex justify-center bg-white">
          <div className="flex h-40 w-40  items-center justify-center rounded-lg bg-white shadow-md">
            <img
              alt="Código QR"
              className="h-full w-full object-contain"
              height="150"
              src="https://i.ibb.co/cY401Fy/frame.png"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
          </div>
        </div>

        <Divider dashed className="page-break" />
        <footer className="flex flex-col justify-center rounded-lg bg-yellow-400 p-4  text-black">
          <div className="flex flex-col justify-around rounded-l-lg">
            <div className="flex items-start justify-between ">
              <div>
                <p className="font-medium ">Ticket de Seguimiento</p>
                <h1 className="font-mono text-5xl font-bold">
                  {data?.response?.serie.toUpperCase()}-{data?.response?.codigo}
                </h1>
              </div>
              <Tag className="rounded-full px-2 pb-0.5 text-lg font-bold lowercase">
                {data?.response?.pagado ? "Pagado" : "Por Pagar"}
              </Tag>
            </div>
            <Divider />
            <p>
              <span className=" ">Remitente : </span>
              <span className="font-bold capitalize  ">
                {data?.response?.remitenteNombres}{" "}
                {data?.response?.remitenteApellidos}
              </span>
              <div></div>
            </p>
            <p>
              <span className="">Destinatario : </span>

              <span className="font-bold capitalize  ">
                {data?.response?.destinatarioNombres}{" "}
                {data?.response?.destinatarioApellidos}
              </span>
            </p>
            <p>
              <span>Descripción : </span>
              <span className="font-bold  ">{data?.response?.descripcion}</span>
            </p>
            {
              data?.response?.factura && (
                <p>
                  <span>Razón Social : </span>
                  <span className="  ">{data?.response?.empresa}</span>
                </p>
              )
             
            }
          </div>
          <Divider />
          <div>
            <section className="flex items-center justify-between ">
              <span>Importe Total</span>
              <span className="font-mono text-3xl font-bold">
                S/. {total.toFixed(2)}
              </span>
            </section>
          </div>
        </footer>
      </div>
    );
  }
);

export default ParcelTicketPrint;
