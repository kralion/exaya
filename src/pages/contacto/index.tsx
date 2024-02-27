import AppHead from "@/components/head";
import LandingLayout from "@/components/landing-layout";
import {
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsWhatsapp,
} from "react-icons/bs";

import ContactForm from "@/components/contact-form";
import Link from "next/link";

export default function Index() {
  return (
    <LandingLayout>
      <AppHead title="Features" />
      <div className=" relative space-y-3.5">
        <h1 className="text-2xl font-bold lg:text-5xl">Contacto</h1>
        <h4 className=" tracking-tigh px-5 lg:px-[450px] ">
          Rellena el siguiente formulario y ponte en contacto con nosotros.
          Estaremos encantados de atenderte.
        </h4>
        <div className="flex flex-col items-start justify-center px-5 py-10 text-white  lg:flex-row lg:px-36">
          <div className="flex flex-col items-start space-y-8  rounded-t-xl bg-gradient-to-b from-primary to-yellow-300 p-6  text-left lg:h-[740px] lg:w-1/3 lg:rounded-l-xl lg:p-10">
            <h1 className="text-xl font-semibold">Ponte en contacto</h1>
            <div className="flex flex-col  space-y-1">
              <strong className="font-semibold">Visítanos</strong>
              <span className="text-xs">
                Ven a decirno hola en nuestras oficinas
              </span>
              <span className="text-left text-xs font-semibold">
                Intersección entre las Avenidas Ancash y Angareas. Huancayo
              </span>
            </div>
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
                <Link
                  href=" https://wa.me/+51914019629?text=Hola%20%20te%20contacto%20por%20Exaya"
                  target="_blank"
                  className="hover:opacity-80"
                >
                  <BsWhatsapp size={20} color="white" className="text-white" />
                </Link>
                <Link
                  href="https://www.instagram.com/joan.paucar"
                  className="hover:opacity-80"
                  target="_blank"
                >
                  <BsInstagram size={20} color="white" className="text-white" />
                </Link>
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
          <div className="flex flex-col space-y-4  border-b-1 border-l-1 border-r-1  bg-white p-6 text-left lg:rounded-r-xl lg:border-r-1  lg:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}
