import { api } from "@/utils/api";
import { Divider, Tag } from "antd";
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
              Boleta de Venta Electrónica {data?.response?.codigo}
            </span>
          </div>
        </header>
        <Divider className="my-2" />
        <section className="space-y-1 bg-white px-4 text-xs">
          <span className="font-mono  font-bold">
            SERVICIO DE TRANSPORTE DE PASAJEROS{" "}
          </span>
          <p className="pr-24">
            Agencia : {data?.response?.usuario.sede.agenciaUbicacion}
          </p>
          <p>Telefonos : 91454845 - 94845845</p>
          <p>
            Pasajero : {data?.response?.pasajeroNombres}{" "}
            {data?.response?.pasajeroApellidos}
          </p>
          <p> DNI : {data?.response?.pasajeroDni}</p>
          <div className=" flex gap-2 text-xs">
            <span>RCEA N°: 20605475427 </span>
          </div>
        </section>
        <Divider className="my-2" />

        <div className="space-y-2 bg-white px-4 text-sm">
          <section>
            <p>
              Fecha Salida:{" "}
              <span className="font-mono  font-bold">
                {data?.response?.viaje.salida.toLocaleDateString("es-PE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </p>
            <p>
              Hora Salida :{" "}
              <span className="font-mono  font-bold">
                {data?.response?.viaje.salida.toLocaleTimeString("es-PE", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </span>
            </p>
            <p>
              Origen :{" "}
              <span className=" font-mono font-bold">
                {data?.response?.viaje.ruta.ciudadOrigen}
              </span>
            </p>
            <p>
              Destino :{" "}
              <span className="font-mono font-bold">
                {data?.response?.destino}
              </span>
            </p>
            <p>
              Asiento :{" "}
              <span className="font-mono  font-bold">
                {data?.response?.asiento}
              </span>
            </p>
          </section>
          <Divider className="my-2" />
          <section className="flex items-center justify-between  text-xs">
            <div className="flex flex-col gap-0.5 uppercase">
              <span>OP.NO Gravada</span>
              <span>IGV</span>
              <span>Importe Total</span>
              <span>Metodo Pago : {data?.response?.metodoPago}</span>
            </div>
            <div className="flex flex-col justify-end gap-0.5 text-right">
              <span>S/. {data?.response?.precio.toFixed(2)}</span>
              <span>S/. {pricewithIgv.toFixed(2)}</span>
              <span className="font-semibold">S/. {total.toFixed(2)}</span>
            </div>
          </section>
          <Divider className="my-2" />
          <section className="flex flex-col justify-center gap-0.5 text-center text-xs">
            <span>Representacion del Comprobante Electrónico</span>
            <span>Autorizacion Nro. 0340050004781/SUNAT</span>
            <span>Consulta en sfe.bizlinks.com.pe</span>
          </section>
          <Divider className="my-2" />
          <div className="flex flex-col gap-0.5 text-xs">
            <span>
              Fecha y Hora Emisión:{" "}
              {data?.response?.fechaRegistro.toLocaleString("es-PE", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
              })}
            </span>
            <span>
              Usuario: {data?.response?.usuario?.nombres} | Operacion: Venta
            </span>
          </div>
          <Divider className="my-2" />
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
        <Divider dashed className="page-break my-2" />
        <footer className="flex flex-col justify-center rounded-lg p-4  text-black">
          <div className="flex flex-col justify-around rounded-l-lg">
            <div className="flex items-start justify-between ">
              <div>
                <p className="font-medium ">Fecha de Embarque</p>
                <h1 className="font-mono text-4xl font-bold">
                  {data?.response?.viaje.salida.toLocaleDateString("es-PE", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </h1>
              </div>
            </div>
            <Divider className="my-2" />
            <p>
              <span className=" ">Pasajero : </span>
              <span className="font-bold capitalize  ">
                {data?.response?.pasajeroNombres}{" "}
                {data?.response?.pasajeroApellidos}
              </span>
            </p>
            <p>
              <span className=" ">Destino : </span>
              <span className="font-bold capitalize  ">
                {data?.response?.destino}
              </span>
            </p>
            <p>
              <span className="">Asiento : </span>

              <span className="font-bold capitalize  ">
                {data?.response?.asiento}
              </span>
            </p>
          </div>
          <p>
            <span className=" ">Codigo : </span>
            <span className="font-bold capitalize  ">
              {data?.response?.codigo}
            </span>
          </p>
          <Divider className="my-2" />
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

export default TravelTicketPrint;
