import MobileNav from "@/components/ui/landingpage/mobilenav";
import AOSWrapper from "@/utils/AOS";
import "animate.css";
import { Black_Ops_One, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import DesktopNavBar from "./ui/landingpage/desktopnav";
import Gradient from "@/assets/gradient.png";
import ThemeToggle from "./ui/landingpage/theme-toggle";
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
      <div className={` ${inter.className} h-screen w-screen`}>
        <div
          className="absolute inset-1  bg-cover bg-center bg-no-repeat opacity-85 blur-xl"
          style={{ backgroundImage: `url(${Gradient.src})` }}
        />

        <MobileNav navLinks={navLinks} />
        <div className="top-0  z-10 flex w-full items-center justify-between bg-transparent px-5 pt-7 backdrop-blur-md  lg:fixed lg:mb-20 lg:px-10">
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
          <ThemeToggle />
        </div>
        <div className={`${inter.className} pt-20  text-center lg:pt-36 `}>
          {children}
        </div>
        <footer className="py-10 text-center text-[12px]  text-zinc-400  ">
          © Copyright 2024 Brayan Paucar. All rights reserved.
        </footer>
      </div>
    </AOSWrapper>
  );
}
