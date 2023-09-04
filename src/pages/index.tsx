import Asset3D4 from "@/assets/3d-asset-4.png";
import Asset3D from "@/assets/3d-asset.png";
import MobileNav from "@/components/ui/login/mobilenav";
import { RightCircleOutlined } from "@ant-design/icons";
import "animate.css";
import LandingBanner4 from "@/assets/landing-banner-4.svg";
import { Image as AntImage, Tag } from "antd";
import { Black_Ops_One, Dancing_Script, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import DevicesVersionSteps from "@/components/ui/login/steps";

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
    <div className="spacey-14 bg-gradient-to-l from-purple-400 via-rose-400 to-orange-300">
      <div className="mb-16 flex items-center  justify-between bg-transparent px-3 pt-7 lg:mx-10 lg:mb-36 ">
        <Link href="/">
          <div className="flex items-center justify-start  lg:pl-0">
            <Image
              src="https://img.icons8.com/?size=512&id=0jE7hnKV3NQW&format=png"
              //40 mobile
              width={50}
              height={50}
              title="Exaya"
              className="animate__animated animate__flip"
              alt="logo"
            />
            <span
              className={` text-xl font-bold lg:text-3xl ${blackOpsOne.className}`}
            >
              Exaya
            </span>
          </div>
        </Link>
        <nav className="hidden lg:inline-flex">
          <ul className=" flex gap-3.5 ">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  className="flex items-center justify-center font-bold text-purple-100 duration-300 hover:text-purple-800  "
                  href={link.path}
                >
                  <span className="mr-2">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="lg:hidden">
          <MobileNav />
        </nav>
      </div>
      <div
        className={`${inter.className} flex h-screen flex-col items-center justify-center  text-center`}
      >
        <div className="space-y-14  px-7 py-16">
          <div className="relative space-y-7">
            <h1 className="text-3xl font-bold lg:text-7xl">
              Conduce tu empresa hacia la excelencia operativa
            </h1>
            {/* //TODO: < br/> separation changes it's place win mobile version  */}
            <div className="space-y-2 lg:text-2xl ">
              El socio tecnológico que acelera el crecimiento de tu empresa en
              la <br />
              industria del transporte
              <blockquote>
                <p className={`${dancing_Script.className} `}>
                  "La elección
                  <Tag
                    color="gold-inverse"
                    className={`${dancing_Script.className} mx-2  rounded-lg px-2 drop-shadow-lg `}
                  >
                    SaaS
                  </Tag>
                  de las empresas líderes"
                </p>
              </blockquote>
            </div>

            <Image
              src={Asset3D}
              //80 mobile
              width={230}
              height={130}
              title="Exaya"
              className="animate__animated  animate__bounceInUp absolute top-12 -left-5  drop-shadow-md lg:-left-0 lg:top-16 "
              alt="logo"
            />
          </div>
          <div className="relative">
            <Link
              href="/dashboard"
              className="hover:purple-900 group inline-flex items-center rounded-full border-b-[3px] border-purple-800 bg-[#231335] px-5 py-2  font-semibold text-zinc-200 shadow-lg shadow-purple-400   duration-500 hover:bg-[#351b52] hover:px-14 active:bg-purple-900 lg:px-10  lg:py-5 lg:text-2xl "
            >
              <RightCircleOutlined
                twoToneColor={"red"}
                className="mr-4 duration-300 group-hover:mr-2 lg:mr-7 "
              />
              Ver Demo
            </Link>

            <Image
              src={Asset3D4}
              //80 mobile
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
            <div className="flex flex-col justify-center gap-7 lg:flex-row  ">
              <AntImage
                src="https://imgur.com/UH4xUQO.png"
                alt="banner"
                className="rounded-2xl duration-300  
             "
                //300 mobile
                width={500}
              />
              <AntImage
                src="https://imgur.com/4D47umW.png"
                alt="banner"
                className="rounded-2xl object-cover drop-shadow-xl duration-300 
              "
                //300 mobile
                width={500}
              />
            </div>
          </AntImage.PreviewGroup>
        </div>
      </div>
      <div className="mx-3.5 flex items-center gap-2">
        <Image
          src={LandingBanner4}
          alt="banner"
          className=" mt-36 flex rounded-2xl drop-shadow-xl duration-300 hover:scale-110"
          //300 mobile
          width={1000}
        />
        <DevicesVersionSteps />
      </div>

      <footer className="pt-24 pb-7 text-center text-[12px] text-white lg:text-sm   ">
        © Copyright 2024 Brayan Paucar. All rights reserved.
      </footer>
    </div>
  );
}
