export default function DevicesVersionSteps() {
  return (
    <div className="row-gap-10 grid gap-6  lg:grid-cols-2">
      <div className="col-span-2">
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border ">
                <svg
                  className="w-6  "
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <polyline
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    points="6,12 10,16 18,8"
                  />
                </svg>
              </div>
            </div>
            <div className="h-full w-px bg-gray-300" />
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-lg font-bold">Versión Web</p>
            <p>
              Control total en tu escritorio: Exaya te brinda una vista
              panorámica para gestionar tu transporte de manera eficiente y
              efectiva
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border">
                <svg className="w-6 " stroke="currentColor" viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    points="6,12 10,16 18,8"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="pt-1">
            <p className="mb-2 text-lg font-bold">Versión Mobile</p>
            <p className="">
              En movimiento con Exaya: Accede a tu gestión de transporte desde
              cualquier lugar, en cualquier momento, con nuestra aplicación
              móvil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
