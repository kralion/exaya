import Asset3D4 from "@/assets/3d-asset-4.png";
import Asset3D from "@/assets/3d-asset.png";
import LandingBanner2 from "@/assets/landing-banner-2.png";
import LandingBanner from "@/assets/landing-banner.png";
import { RightCircleOutlined } from "@ant-design/icons";
import "animate.css";
import { Black_Ops_One, Dancing_Script, Inter } from "next/font/google";
import Link from "next/link";
import { Image as AntImage, Tag } from "antd";
import Image from "next/image";

const navLinks = [
  {
    title: "Login",
    path: "/login",
  },
  {
    title: "Nosotros",
    path: "/about",
  },
  {
    title: "Planes",
    path: "/plans",
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
    <div className="bg-gradient-to-l from-purple-400 via-rose-400 to-orange-300">
      <div className="mx-10  mb-36 flex items-center justify-between bg-transparent pt-7 ">
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
        <nav className="">
          <ul className=" flex gap-3.5 ">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  className="2  flex items-center justify-center  font-bold text-purple-200 duration-300 hover:text-purple-800  "
                  href={link.path}
                >
                  <span className="mr-2">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={`${inter.className} flex h-screen flex-col items-center justify-center  text-center`}
      >
        <div className="space-y-14  px-7 py-16">
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
                  "La elección
                  <Tag
                    color="gold-inverse"
                    className={`${dancing_Script.className} mx-2  rounded-lg px-2 text-2xl drop-shadow-lg`}
                  >
                    SaaS
                  </Tag>
                  de las empresas líderes en transporte"
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
              className="hover:purple-900 group inline-flex items-center rounded-full border-b-[3px] border-purple-800 bg-[#231335] px-10  py-5 text-2xl font-semibold   text-zinc-200 shadow-lg shadow-purple-400 duration-500 hover:bg-[#351b52]  hover:px-14 active:bg-purple-900 "
            >
              <RightCircleOutlined
                twoToneColor={"red"}
                className="mr-7 duration-300 group-hover:mr-2 "
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
          </div>
          <AntImage.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            <div className="flex justify-center gap-7">
              <AntImage
                src="https://i.imgur.com/E7NeoHl.png"
                alt="banner"
                className=" rounded-2xl drop-shadow-xl duration-300 hover:scale-105"
                width={500}
              />
              <AntImage
                src="https://imgur.com/kbk5cmj.png"
                alt="banner"
                className="https://i.imgur.com/kbk5cmj.pnghover:scale-105 rounded-2xl drop-shadow-xl 
              duration-300"
                width={500}
              />
            </div>
          </AntImage.PreviewGroup>
        </div>
      </div>

      <footer className="pt-24 pb-7 text-center text-sm text-white   ">
        © Copyright 2024 Brayan Paucar. All rights reserved.
      </footer>
    </div>
  );
}
