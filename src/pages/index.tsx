import Asset3D3 from "@/assets/3d-asset-3.png";
import Asset3D4 from "@/assets/3d-asset-4.png";
import Asset3D from "@/assets/3d-asset.png";
import LandingBanner2 from "@/assets/landing-banner-2.png";
import LandingBanner from "@/assets/landing-banner.png";
import styles from "@/styles/landing.module.css";
import {
  RightCircleOutlined,
  SendOutlined,
  DollarOutlined,
  ChromeOutlined,
} from "@ant-design/icons";
import { Black_Ops_One, Dancing_Script, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "animate.css";

const navLinks = [
  {
    title: "Iniciar Sesión",
    path: "/login",
    icon: <SendOutlined />,
  },
  {
    title: "Nosotros",
    path: "/about",
    icon: <ChromeOutlined />,
  },
  {
    title: "Planes",
    path: "/plans",
    icon: <DollarOutlined />,
  },
];

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});
const dancing_Script = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
  preload: true,
});
const inter = Inter({
  weight: ["800", "300"],
  subsets: ["latin-ext"],
  preload: true,
});
export default function Index() {
  return (
    <div className="bg-[#FFFEF7]">
      <div className="mx-10  mb-24 flex items-center justify-between bg-transparent pt-7 ">
        <Link href="/">
          <div className="flex items-center justify-start">
            <Image
              src="https://img.icons8.com/?size=512&id=0jE7hnKV3NQW&format=png"
              width={50}
              height={50}
              title="Exaya"
              className="animate__animated animate__flip"
              alt="logo"
            />
            <span className={` text-3xl font-bold ${blackOpsOne.className}`}>
              Exaya
            </span>
          </div>
        </Link>
        <nav>
          <ul className=" flex gap-2 ">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  className="inline-flex items-center rounded-full border-b-2 border-[#231335] bg-[#FFFEF7] px-6 py-2  text-sm   text-[#231335] shadow-md duration-300 hover:border-purple-600 hover:bg-[#231335] hover:text-[#FFFEF7]"
                  href={link.path}
                >
                  <span className="mr-2">{link.title}</span>
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={`${inter.className} m-10 flex h-screen flex-col items-center justify-center  text-center`}
      >
        <div className="relative space-y-14  rounded-2xl   border-1 border-slate-500 bg-gradient-to-t from-purple-400 to-purple-100 px-7 py-16">
          <div className="relative space-y-7">
            <h1 className="text-7xl font-bold">
              Conduce tu empresa hacia la excelencia operativa
            </h1>
            <div className="space-y-2">
              <h5>
                El socio tecnológico que acelera el crecimiento de tu empresa en
                la industria del transporte <br />{" "}
              </h5>
              <blockquote className="text-2xl">
                <p className={`${dancing_Script.className} text-2xl`}>
                  "La elección SaaS de las empresas líderes en transporte"
                </p>
              </blockquote>
            </div>

            <Image
              src={Asset3D}
              width={230}
              height={230}
              title="Exaya"
              className="animate__animated  animate__bounceInUp absolute left-0 top-16  drop-shadow-md "
              alt="logo"
            />
          </div>
          <div className="relative">
            <Link
              href="/login"
              className="hover:purple-900 group inline-flex items-center rounded-full border-b-[3px] border-purple-900 bg-[#231335]  px-10 py-5 text-2xl   text-zinc-200 shadow-lg shadow-purple-400 duration-500 hover:bg-[#351b52]  hover:px-14 active:bg-purple-900 "
            >
              <RightCircleOutlined
                twoToneColor={"red"}
                className="mr-2 duration-100 group-hover:mr-4 "
              />
              Ver Demo
            </Link>

            <Image
              src={Asset3D4}
              width={130}
              height={130}
              title="Exaya"
              className="animate__animated animate__fadeInDown animate__delay-2s absolute -top-16 right-0 rotate-45 drop-shadow-xl "
              alt="asset"
            />

            <Image
              src={Asset3D3}
              width={130}
              height={130}
              title="Exaya"
              className="animate__animated animate__flip absolute -left-7 top-80 -rotate-45"
              alt="asset"
            />
            <Image
              src={Asset3D3}
              width={130}
              height={130}
              title="Exaya"
              className="animate__animated animate__flip absolute -right-7 top-96 -rotate-45"
              alt="asset"
            />
          </div>
          <div className="flex justify-center gap-7">
            <Image
              src={LandingBanner}
              alt="banner"
              className=" rounded-2xl drop-shadow-xl duration-300 hover:scale-105"
              width={500}
              height={500}
            />
            <Image
              src={LandingBanner2}
              alt="banner"
              className="rounded-2xl drop-shadow-xl duration-300 hover:scale-105"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <footer className="py-5 text-center text-sm text-zinc-100 drop-shadow-sm ">
        © Copyright 2024 Brayan Paucar . All rights reserved.
      </footer>
    </div>
  );
}
