export default function DevicesVersionSteps() {
  return (
    <div>
      <div className="flex">
        <div className="mr-4 flex flex-col items-center">
          <div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-orange-400 text-white lg:h-10 lg:w-10 ">
              <svg
                className="w-5 lg:w-6  "
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
          <div className="h-full w-0.5    bg-orange-400" />
        </div>
        <div className="pt-1 pb-8">
          <p className="mb-2 font-bold lg:text-lg">Versión Web</p>
          <p className="lg:text-md text-sm">
            Control total en tu escritorio: Exaya te brinda una vista panorámica
            para gestionar tu transporte de manera eficiente y efectiva
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="mr-4 flex flex-col items-center">
          <div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-orange-400 text-white lg:h-10 lg:w-10 ">
              <svg
                className="w-5 lg:w-6  "
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
        </div>
        <div className="pt-1">
          <p className="mb-2 font-bold lg:text-lg">Versión Mobile</p>
          <p className="lg:text-md text-sm">
            En movimiento con Exaya: Accede a tu gestión de transporte desde
            cualquier lugar, en cualquier momento, con nuestra aplicación móvil
          </p>
        </div>
      </div>
    </div>
  );
}
