import Asset3D3 from "@/assets/3d-asset-3.png";
import Asset3D4 from "@/assets/3d-asset-4.png";
import Asset3D from "@/assets/3d-asset.png";
import LandingBanner2 from "@/assets/landing-banner-2.png";
import LandingBanner from "@/assets/landing-banner.png";
import {
  RightCircleOutlined,
  SendOutlined,
  PhoneOutlined,
  ChromeOutlined,
} from "@ant-design/icons";
import { Black_Ops_One, Dancing_Script, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
    title: "Contacto",
    path: "/contact",
    icon: <PhoneOutlined />,
  },
];

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
const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});
export default function Index() {
  return (
    <>
      <div className="mx-10 flex items-baseline justify-between ">
        <Link href="/">
          <div className=" mb-16 mt-7 flex items-center justify-start">
            <Image
              src="https://img.icons8.com/?size=512&id=0jE7hnKV3NQW&format=png"
              width={30}
              height={30}
              title="Exaya"
              className="animate__animated animate__flip"
              alt="logo"
            />
            <h3
              className={`  text-left text-2xl  leading-none text-[#231335]   ${blackOpsOne.className} `}
            >
              Exaya
            </h3>
          </div>
        </Link>
        <nav>
          <ul className=" flex gap-2 ">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  className={` inline-flex items-center rounded-full border-b-2 border-purple-500 bg-white px-6 py-2 font-bold text-purple-800 shadow-md duration-500 hover:border-purple-600 hover:bg-purple-500 hover:text-white ${inter.className}`}
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
        className={`${inter.className} m-10 flex h-screen flex-col items-center justify-center bg-[#FFFEF7] text-center`}
      >
        <div className="relative  space-y-14   rounded-2xl border-1 border-slate-500 bg-zinc-100 px-7 py-16">
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
              className="animate__animated  animate__flip absolute left-0 top-16  drop-shadow-md "
              alt="logo"
            />
          </div>
          <div className="relative">
            <Link
              href="/login"
              className={` items-center rounded-full bg-gradient-to-l from-rose-900 via-purple-900 to-purple-900 px-10 py-5 text-xl font-semibold text-white shadow-xl  hover:bg-purple-950  ${inter.className}`}
            >
              <RightCircleOutlined twoToneColor={"red"} className="mr-2" />
              Obtener
            </Link>

            <Image
              src={Asset3D4}
              width={130}
              height={130}
              title="Exaya"
              className="animate__animated animate__flip absolute -top-16 right-0 rotate-45 drop-shadow-xl "
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
      <footer className="mt-16 text-center text-sm text-slate-500 drop-shadow-sm">
        © Copyright 2024 Brayan Paucar . All rights reserved.
      </footer>
    </>
  );
}
