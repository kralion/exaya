import AppHead from "@/components/common/head";
import LandingLayout from "@/components/landing/landing-layout";
import { BsLinkedin, BsTwitterX, BsWhatsapp } from "react-icons/bs";

import ContactForm from "@/components/landing/contact-form";
import Link from "next/link";

export default function Index() {
  return (
    <LandingLayout>
      <AppHead title="Features" />
      <div className=" relative space-y-3.5 ">
        <h1 className="bg-gradient-to-r from-zinc-700 to-black bg-clip-text text-2xl font-bold tracking-tight text-transparent dark:from-white dark:to-zinc-300   lg:text-5xl">
          Contacto
        </h1>
        <h4 className=" tracking-tigh px-5 text-zinc-700 dark:text-zinc-200 lg:px-[450px]">
          Rellena el siguiente formulario y ponte en contacto con nosotros.
          Estaremos encantados de atenderte.
        </h4>
        <div className="flex flex-col items-start justify-center px-5 py-10 text-white  lg:flex-row lg:px-36">
          <div className="flex flex-col items-start space-y-8    bg-gradient-to-b from-primary to-yellow-300 p-6 text-left  dark:from-orange-600 dark:to-yellow-600 lg:h-[645px] lg:w-1/3 lg:rounded-l-xl lg:p-10">
            <h1 className="text-xl font-semibold">Ponte en contacto</h1>

            <div className="flex flex-col items-start  space-y-1">
              <strong className="font-semibold">Chatea con Nosotros</strong>
              <span className="text-xs">
                Nuestro equipo de soporte está disponible para ayudarte.
              </span>
              <span className="text-xs font-semibold">
                joan300501@gmail.com
              </span>
            </div>
            <div className="flex flex-col items-start  space-y-1">
              <strong className="font-semibold">Llámanos</strong>
              <span className="text-xs">Lun-Sáb desde las 8:00am - 7:00pm</span>
              <span className="text-xs font-semibold">(+51) 914 019 629</span>
            </div>
            <div className="flex flex-col items-start  space-y-1">
              <strong className="font-semibold">Redes Sociales</strong>
              <div className="flex items-center gap-2">
                <Link
                  href="https://www.linkedin.com/in/brayanpaucar"
                  className="hover:opacity-80"
                  target="_blank"
                >
                  <BsLinkedin size={20} color="white" className="text-white" />
                </Link>
                <a
                  href=" https://wa.me/+51914019629?text=Hola%20%20te%20contacto%20por%20Exaya"
                  target="_blank"
                  className="hover:opacity-80"
                >
                  <BsWhatsapp size={20} color="white" className="text-white" />
                </a>

                <Link
                  href="https://twitter.com/brayanpaucar_"
                  className="hover:opacity-80"
                  target="_blank"
                >
                  <BsTwitterX size={20} color="white" className="text-white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 border-b-1 border-l-1 border-r-1  bg-white p-6 text-left  dark:border-orange-700 dark:bg-orange-700/90  lg:rounded-r-xl lg:border-r-1  lg:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}
