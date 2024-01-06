import MobileNav from "@/components/ui/login/mobilenav";
import AOSWrapper from "@/utils/AOS";
import { BsArrowRight } from "react-icons/bs";
import "animate.css";
import { Black_Ops_One, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import DesktopNavBar from "./ui/login/desktopnav";
import BgGradient from "@/assets/bg.jpg";
const inter = Inter({
  weight: ["800", "600", "300"],
  subsets: ["latin-ext"],
});
const blackOpsOne = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
});
export const navLinks = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
  {
    label: "Membresías",
    href: "/planes",
  },

  {
    label: "Ingresar",
    href: "/login",
  },
];

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AOSWrapper>
      <div className={` ${inter.className} h-screen w-screen rounded-[200px]`}>
        <div
          className="absolute inset-0 rounded-b-[200px] bg-cover bg-center bg-no-repeat opacity-85 blur-md"
          style={{ backgroundImage: `url(${BgGradient.src})` }}
        />

        <MobileNav navLinks={navLinks} />
        <div className="top-0  z-10 flex w-full items-center justify-between bg-transparent px-10 pt-7  backdrop-blur-md lg:fixed lg:mb-20">
          <Link href="/">
            <div className="animate__animated animate__flipInX flex items-center justify-start duration-300  hover:opacity-70 ">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
                //40 mobile
                width={40}
                height={40}
                className=" drop-shadow-xl"
                alt="logo"
                priority
              />
              <span
                className={` text-2xl  lg:text-3xl ${blackOpsOne.className}`}
              >
                Exaya
              </span>
            </div>
          </Link>
          <DesktopNavBar navLinks={navLinks} />

          <Link
            href="/dashboard"
            className=" lg:text-md hidden items-center  gap-2 rounded-full border-1 border-black px-3 py-2 text-sm font-semibold duration-300  hover:border-white  hover:bg-orange-500 hover:text-white active:bg-orange-500  lg:flex"
            title="Iniciar sesión"
          >
            Probarlo
          </Link>
        </div>
        <div className={`${inter.className} pt-36 text-center `}>
          {children}
        </div>
        <footer className="py-10 text-center text-[12px]  font-semibold text-gray-900  ">
          © Copyright 2024 Brayan Paucar. All rights reserved.
        </footer>
      </div>
    </AOSWrapper>
  );
}
