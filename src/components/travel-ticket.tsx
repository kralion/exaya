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
    const salida = data?.response?.viaje.salida;
    const duracionEstimada = data?.response?.viaje.ruta
      .duracionEstimada as number;
    let horaLlegada = "N/A";

    if (salida && duracionEstimada) {
      const salidaDate = new Date(salida);
      salidaDate.setHours(salidaDate.getHours() + duracionEstimada);

      horaLlegada = salidaDate.toLocaleTimeString("es-PE", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    return (
      <div ref={ref}>
        <header className="bg-yellow-40 rounded-t-lg  bg-yellow-400 p-6 text-white">
          <div className="flex items-center  justify-between">
            <div className="flex items-center gap-2  text-2xl font-bold text-black">
              <img
                alt="Logo"
                className="h-8 w-8"
                src="https://img.icons8.com/?size=50&id=9351&format=png"
              />
              <h2 className={inter.className}>Expreso Ayacucho</h2>
            </div>
          </div>
        </header>
        <div className="space-y-8 bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-mono text-2xl font-bold text-black">
                Boleto {data?.response?.serie.toUpperCase()}-
                {data?.response?.codigo}
              </h2>
              <p className="text-gray-500 ">
                Salida a Huancayo - S/. {data?.response?.precio}
              </p>
            </div>
            <div className="rounded-full  bg-gray-100 px-4 py-2">
              <p className="text-xs  font-medium text-gray-500">
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
              <p className="font-medium  text-gray-500">Salida</p>
              <p className="font-bold  capitalize text-gray-900">
                {data?.response?.viaje.ruta.ciudadOrigen},{" "}
                {data?.response?.viaje.ruta.ciudadOrigen
                  .slice(0, 3)
                  .toUpperCase()}
              </p>
              <p className="text-gray-500 ">
                {data?.response?.viaje.salida.toLocaleTimeString("es-PE", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-500">Llegada</p>
              <p className="font-bold capitalize text-gray-900">
                {data?.response?.viaje.ruta.ciudadDestino},{" "}
                {data?.response?.viaje.ruta.ciudadDestino
                  .slice(0, 3)
                  .toUpperCase()}
              </p>
              <p className="text-gray-500 ">{horaLlegada}</p>
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
            </ul>
          </div>{" "}
        </div>
        <div className="flex  justify-center  bg-gray-100 px-6 py-8">
          <div className="flex h-40 w-40  items-center justify-center rounded-lg bg-white shadow-md">
            <img
              alt="Código QR"
              className="h-full w-full object-contain"
              height="160"
              src="https://i.ibb.co/9NNjkF8/qr-code-exaya.png"
              style={{
                aspectRatio: "160/160",
                objectFit: "cover",
              }}
              width="160"
            />
          </div>
        </div>
        <section className="rounded-b-lg bg-yellow-400 text-center font-mono">
          <span className="text-xs  text-black">
            Atención al Cliente: 91454845 - 94845845
          </span>
        </section>
        <hr className="my-0.25 border-t border-dashed border-white " />
        <footer className="flex justify-between rounded-lg bg-yellow-400 p-4  text-black">
          <div className="flex flex-col justify-around rounded-l-lg">
            <p className="font-medium ">Boleto de Viaje</p>
            <h1 className="font-mono text-5xl font-bold">
              {data?.response?.serie.toUpperCase()}-{data?.response?.codigo}
            </h1>
          </div>
          <div>
            <p className="font-bold ">{data?.response?.pasajeroNombres}</p>
            <p className="text-sm">
              Salida: {data?.response?.viaje.ruta.ciudadOrigen},{" "}
              {data?.response?.viaje.ruta.ciudadOrigen
                .slice(0, 3)
                .toUpperCase()}
            </p>
            <p className="text-sm">
              Llegada: {data?.response?.viaje.ruta.ciudadDestino},{" "}
              {data?.response?.viaje.ruta.ciudadDestino
                .slice(0, 3)
                .toUpperCase()}
            </p>
            <p className="text-sm">S/. {data?.response?.precio}</p>
          </div>
        </footer>
      </div>
    );
  }
);

export default TravelTicketPrint;
