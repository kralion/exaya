export default function DevicesVersionSteps() {
  return (
    <div>
      <div className="flex">
        <div className="mr-4 flex flex-col items-center">
          <div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-orange-400 text-white ">
              <svg className="w-5  " stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="h-full w-[1px]     bg-white" />
        </div>
        <div className="pb-20">
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
            <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-orange-400 text-white  ">
              <svg className="w-5  " stroke="currentColor" viewBox="0 0 24 24">
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
        <div>
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
