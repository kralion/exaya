import AppHead from "@/components/head";
import AppLayout from "@/components/layout";
import { BsWhatsapp } from "react-icons/bs";
import { IoMdBook } from "react-icons/io";
import { Tag } from "antd";
import { Literata } from "next/font/google";
import Image from "next/image";

const literata = Literata({
  weight: "400",
  subsets: ["latin-ext"],
  preload: true,
});
export default function Soporte() {
  return (
    <AppLayout>
      <AppHead title="Soporte" />
      <div className="flex flex-col items-center gap-7">
        <Image
          width={200}
          height={200}
          src="https://ouch-cdn2.icons8.com/sWspUF6_ECZRNO0zP1znr5bnaExFblS6xwyuGCVi1KE/rs:fit:368:417/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODM1/LzM4MTRiZDg2LWU2/ZjEtNDE2Yi1iNjMw/LTU1ZDQ0NmU1NTc5/MS5wbmc.png"
          alt="Support Banner"
        />
        <div className="my-7 flex flex-col items-center justify-center text-center">
          <div className="space-y-3">
            <h1 className={` ${literata.className} text-3xl `}>
              Estás teniendo algún problema ?
            </h1>
            <h5>
              Si tienes algún problema con la sistema web, puedes contactarnos
              instantáneamente por medio <br />
              de nuestro chat en vivo. O si lo prefieres, puedes agendar una{" "}
              <br />
              cita con nosotros.
            </h5>
          </div>
          <div className="mb-12 mt-7 flex gap-3">
            <a
              href=" https://wa.me/+51914019629?text=Estoy%20teniendo el%20siguiente %20problema"
              target="_blank"
            >
              <Tag
                color="green-inverse"
                className="flex cursor-pointer items-center gap-2 rounded-full px-7  py-2 shadow-md hover:bg-green-500"
              >
                <BsWhatsapp size={15} />
                Chat en vivo
              </Tag>
            </a>
            <a
              href="mailto:joan300501@gmail.com?subject=Soporte,%20Exaya!&body=Hola,%20Tengo un problema!
            "
            >
              <Tag
                color="volcano-inverse"
                className="flex cursor-pointer items-center gap-2 rounded-full px-7 py-2 shadow-md hover:bg-orange-500"
              >
                <IoMdBook size={15} />
                Agendar una cita
              </Tag>
            </a>
          </div>
          <h5 className="my-3 font-bold">
            O nos puedes contactar por medio de
          </h5>
          <div className="mb-14 flex gap-3">
            <Tag className="flex border-none bg-blue-100 font-bold">
              E-mail :
              <span className="flex items-center gap-2 pl-1  text-blue-600">
                joan300501@gmail.com
              </span>
            </Tag>
            <Tag className="flex border-none  bg-blue-100 font-bold">
              Teléfono :
              <span className="flex items-center gap-2 pl-1 text-blue-600">
                +51 914 019 629
              </span>
            </Tag>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
