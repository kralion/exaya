import MobileNav from "@/components/ui/login/mobilenav";
import AOSWrapper from "@/utils/AOS";
import { BsArrowRight } from "react-icons/bs";

import "animate.css";
import { Black_Ops_One, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({
  weight: ["800", "600", "300"],
  subsets: ["latin-ext"],
  preload: true,
});
const blackOpsOne = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});
export const navLinks = [
  {
    title: "Features",
    path: "/features",
  },
  {
    title: "Contacto",
    path: "/contacto",
  },
  {
    title: "Membresías",
    path: "/planes",
  },

  {
    title: "Ingresar",
    path: "/login",
  },
];

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AOSWrapper>
      <div
        className={` ${inter.className}  bg-gradient-to-r from-orange-400 via-rose-400 to-yellow-300`}
      >
        <div className="mb-16 flex items-center  justify-between bg-transparent px-3 pt-7 lg:mx-10 lg:mb-20 ">
          <Link href="/">
            <div className="animate__animated animate__flipInX flex items-center justify-start duration-300  hover:opacity-70 ">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
                //40 mobile
                width={40}
                height={40}
                className=" drop-shadow-xl"
                alt="logo"
              />
              <span
                className={` text-2xl font-bold  lg:text-3xl ${blackOpsOne.className}`}
              >
                Exaya
              </span>
            </div>
          </Link>
          <nav className="hidden lg:inline-flex">
            <ul className=" flex gap-2.5 ">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    className="flex items-center justify-center text-sm font-semibold duration-300 hover:opacity-60 "
                    href={link.path}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden items-center gap-2 lg:flex ">
            {/* <ThemeToggle /> */}
            <Link
              href="/dashboard"
              className=" lg:text-md  flex items-center gap-2 rounded-md border-1 border-black px-2 py-1 text-sm font-semibold duration-300 hover:border-transparent  hover:bg-orange-500 hover:text-white  active:bg-orange-500 "
              title="Iniciar sesión"
            >
              Probarlo
              <BsArrowRight size={15} />
            </Link>
          </div>
          <nav className="lg:hidden">
            <MobileNav />
          </nav>
        </div>
        <div className={`${inter.className} text-center `}>{children}</div>
        <footer className="py-10 text-center text-[12px]  font-semibold text-gray-900  ">
          © Copyright 2024 Brayan Paucar. All rights reserved.
        </footer>
      </div>
    </AOSWrapper>
  );
}
