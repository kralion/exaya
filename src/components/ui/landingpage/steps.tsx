import Image from "next/image";

export default function DevicesVersionSteps() {
  return (
    <div data-aos="zoom-in">
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
          <div
            data-aos="fade-up"
            className="h-full w-[1px] border border-dotted border-black"
          />
        </div>
        <div className="pb-20">
          <p className="mb-2 font-bold lg:text-lg">Plataforma Web</p>
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
          <p className="mb-2 font-bold lg:text-lg">Vista Mobile</p>
          <p className="lg:text-md text-sm">
            En movimiento con Exaya: Accede a tu gestión de transporte desde
            cualquier lugar, en cualquier momento, con nuestra aplicación móvil
          </p>
        </div>
      </div>
      <div className="mt-10 rounded-xl border-1 p-6">
        <div className="flex justify-between ">
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="200"
            className="flex items-center justify-center rounded-lg bg-white p-2 shadow-md"
          >
            <Image
              src="https://logowik.com/content/uploads/images/iso-27001-information-security5133.logowik.com.webp"
              alt="Certification 1"
              width={70}
              height={70}
            />
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="200"
            className="flex items-center justify-center rounded-lg bg-white p-4 shadow-md"
          >
            <Image
              src="https://logodix.com/logo/2033050.png"
              alt="Certification 1"
              width={60}
              height={60}
            />
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="200"
            className="flex items-center justify-center rounded-lg bg-white p-4 shadow-md"
          >
            <Image
              src="https://logowik.com/content/uploads/images/aicpa-soc-2-type-ii-certified2471.jpg"
              alt="Certification 1"
              width={60}
              height={60}
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="200"
            className="flex items-center justify-center rounded-lg bg-white p-4 shadow-md"
          >
            <Image
              src="https://cdn.worldvectorlogo.com/logos/iso-9001-certified.svg"
              alt="Certification 1"
              width={60}
              height={60}
            />
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="200"
            className="flex items-center justify-center rounded-lg bg-white p-4 shadow-md"
          >
            <Image
              src="https://logodix.com/logo/1673521.png"
              alt="Certification 1"
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
