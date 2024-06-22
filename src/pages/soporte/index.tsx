import SoporteGradient from "@/assets/images/soporte-gradient.png";
import AppLayout from "@/components/exaya/layout";
import AppHead from "@/components/landing/head";
import { Space, Tag, Typography } from "antd";
import { Literata } from "next/font/google";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
const { Text } = Typography;

const literata = Literata({
  weight: "400",
  subsets: ["latin-ext"],
  preload: true,
});
export default function Soporte() {
  return (
    <AppLayout>
      <AppHead title="Soporte" />
      <Space
        direction="vertical"
        className="flex w-full flex-col items-center gap-7 rounded-2xl pt-2"
        style={{
          backgroundImage: `url(${SoporteGradient.src})`,
          height: "200px",
          width: "100%",
        }}
      >
        <Image
          width={200}
          height={200}
          src="https://ouch-cdn2.icons8.com/sWspUF6_ECZRNO0zP1znr5bnaExFblS6xwyuGCVi1KE/rs:fit:368:417/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODM1/LzM4MTRiZDg2LWU2/ZjEtNDE2Yi1iNjMw/LTU1ZDQ0NmU1NTc5/MS5wbmc.png"
          alt="Support Banner"
          className="drop-shadow-xl"
        />
        <div className="my-7 flex flex-col items-center justify-center gap-7 text-center">
          <Space direction="vertical" className="mx-auto w-full lg:w-2/3">
            <h1 className={` ${literata.className} text-2xl lg:text-3xl `}>
              Estás teniendo algún problema ?
            </h1>
            <Text>
              Puedes contactarnos instantáneamente por medio de nuestro chat en
              vivo o agendar una cita con nosotros.
            </Text>
          </Space>
          <div className="flex gap-2 lg:gap-3">
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
              href="https://cal.com/brayanpaucar/soporte-exaya"
              target="_blank"
            >
              <Tag
                color="volcano-inverse"
                className="flex cursor-pointer items-center gap-2 rounded-full px-7 py-2 shadow-md hover:bg-orange-500"
              >
                <IoVideocamOutline size={15} />
                Reservar una cita
              </Tag>
            </a>
          </div>
        </div>
      </Space>
    </AppLayout>
  );
}
