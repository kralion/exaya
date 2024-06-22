import { api } from "@/utils/api";
import { Divider, Tag } from "antd";
import { forwardRef } from "react";

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
        <header className=" flex flex-col items-center  justify-center overflow-hidden rounded-t-lg bg-yellow-400 px-4 pt-2 text-center ">
          <div className="flex flex-col items-center justify-center gap-3   text-black">
            <img
              alt="Logo"
              src="https://img.icons8.com/?size=50&id=9351&format=png"
            />
            <div className="flex flex-col items-center justify-center  text-black">
              <h2 className="text-lg font-bold">Expreso Ayacucho</h2>

              <h4 className="text-xs">RUC: 20605475427</h4>
              <h4 className=" text-center text-xs">
                Jr. Angaraes Nro. 223 Int 002 Sec. Huancayo Sec 15(Esquina de
                Ancash y Angaraes) Junín - Huancayo - Huancayo
              </h4>
            </div>
            <span className="font-mono text-lg font-semibold uppercase">
              Identificador {data?.response?.serie} - 000
              {data?.response?.numero}
            </span>
          </div>
        </header>
        <Divider className="my-2 dark:bg-black/70" />
        <div className=" bg-white px-4">
          <p>
            <span>Remitente : </span>
            <span className="font-mono font-bold capitalize">
              {data?.response?.remitenteNombres}{" "}
              {data?.response?.remitenteApellidos}
            </span>
          </p>
          <p>
            <span>Destinatario : </span>
            <span className="font-mono font-bold capitalize">
              {data?.response?.destinatarioNombres}{" "}
              {data?.response?.destinatarioApellidos}
            </span>
          </p>
          <p>
            <span>Destino : </span>
            <span>
              {data?.response?.destino === "Huanta"
                ? "Huanta - Agencia Jr. Gervacio Santillana 712"
                : data?.response?.destino === "Ayacucho"
                ? "Ayacucho - TERRAPUERTO LIBERTADORES DE AMERICA CAUTER 27"
                : "Huancayo - Agencia Jr. Angaraes Nro. 223"}
            </span>
          </p>
          <p>
            <span>Descripción : </span>
            <span className="  ">{data?.response?.descripcion}</span>
          </p>
          {data?.response?.factura && (
            <p>
              <span>Razón Social : </span>
              <span className="  ">{data?.response?.razonSocial}</span>
            </p>
          )}
          {data?.response?.factura && (
            <p>
              <span>RUC : </span>
              <span className="  ">{data?.response?.ruc}</span>
            </p>
          )}
          <p>
            <span>Codigo de Rastreo : </span>
            <span className="font-mono">{data?.response?.codigoRastreo}</span>
          </p>

          <Divider className="my-2" />
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
          <Divider className="my-2" />
          <span className="text-xs">
            Usuario: {data?.response?.usuario?.nombres} | Operacion: Venta
          </span>
          <Divider className="my-2" />

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
        <footer className="mt-4 flex  flex-col justify-center rounded-lg bg-white  p-4  ">
          <div className="flex flex-col justify-around rounded-l-lg">
            <div className="flex items-start justify-between ">
              <div>
                <p className="font-medium ">Ticket de Seguimiento</p>
                <h1 className="font-mono text-5xl font-bold">
                 {data?.response?.serie} - 000
              {data?.response?.numero}
                </h1>
              </div>
              <Tag className="rounded-full px-2.5 pb-0.5 text-lg font-semibold lowercase">
                {data?.response?.pagado ? "Pagado" : "Por Pagar"}
              </Tag>
            </div>
            <Divider className="my-2" />
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
            {data?.response?.factura && (
              <p>
                <span>Razón Social : </span>
                <span className="  ">{data?.response?.razonSocial}</span>
              </p>
            )}
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
