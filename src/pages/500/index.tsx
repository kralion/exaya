import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
export default function Index() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="px-4 lg:py-12">
        <div className="items-center lg:flex lg:gap-4">
          <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 className="text-9xl font-bold text-orange-600">500</h1>
            <p className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Error del servidor
            </p>
            <p className="mb-8 text-center text-gray-500 md:text-lg">
              Ha ocurrido un error en el servidor, comuníquese <br /> con el
              equipo técnico
            </p>
            <Link
              href="/soporte"
              className="group flex items-center gap-3 rounded-lg bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-200"
            >
              <BiArrowBack className="duration-200 group-hover:w-5" />
              Ir a Soporte
            </Link>
          </div>
          <div className="mt-4">
            <Image
              src="https://img.freepik.com/premium-vector/window-operating-system-error-warning-dialog-window-popup-message-with-system-failure-flat-design_812892-54.jpg?size=626&ext=jpg"
              alt="img"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
