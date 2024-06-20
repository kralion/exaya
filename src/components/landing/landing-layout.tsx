import DarkGradient from "@/assets/images/dark-gradient.png";
import LightGradient from "@/assets/images/light-gradient.png";
import MobileNav from "@/components/ui/landingpage/mobilenav";
import AOSWrapper from "@/utils/AOS";
import { Alert, Tag } from "antd";
import { Black_Ops_One, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import DesktopNavBar from "../ui/landingpage/desktopnav";
import Footer from "./footer";
import { useSession } from "next-auth/react";
import { BsArrowRight } from "react-icons/bs";

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
    label: "Boletos",
    href: "/boletos",
  },
  {
    label: "Rastreo",
    href: "/encomiendas/rastreo",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Membresías",
    href: "/planes",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  return (
    <AOSWrapper>
      <div className={` ${inter.className}  dark:bg-zinc-900 dark:text-white`}>
        <div
          className="absolute inset-0 bg-cover  bg-center bg-no-repeat opacity-85 "
          style={{
            backgroundImage: `url(${LightGradient.src})`,
            width: "100%",
          }}
        >
          <div
            className="dark:absolute dark:inset-0  dark:bg-cover dark:bg-center dark:bg-no-repeat "
            style={{
              backgroundImage: `url(${DarkGradient.src})`,
              width: "100%",
            }}
          />
        </div>

        <MobileNav navLinks={navLinks} />
        <div className="top-0  z-10 flex w-full items-center justify-between bg-transparent px-5 pt-7 backdrop-blur-sm  lg:fixed lg:mb-20 lg:px-10">
          <Link href="/">
            <div className=" flex items-center justify-start duration-300  hover:opacity-70 ">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
                width={40}
                height={40}
                className=" drop-shadow-xl"
                alt="logo"
                priority
              />
              <span
                className={` text-2xl text-zinc-900 dark:text-zinc-200  lg:text-3xl ${blackOpsOne.className}`}
              >
                Exaya
              </span>
            </div>
          </Link>
          <Link
            className=" text-sm lg:hidden"
            href={session ? "/dashboard" : "/login"}
          >
            {session ? (
              <button className="group flex items-center gap-1 text-sm font-semibold duration-300 hover:underline">
                Ir al Dashboard{" "}
                <BsArrowRight
                  className="duration-300 group-hover:translate-x-2"
                  size={15}
                />
              </button>
            ) : (
              <button className="flex items-center gap-1  font-semibold underline active:opacity-80 dark:no-underline dark:hover:underline">
                Iniciar Sesión
              </button>
            )}
          </Link>
          <DesktopNavBar navLinks={navLinks} />
          <Link
            className="hidden lg:block"
            href={session ? "/dashboard" : "/login"}
          >
            {session ? (
              <button className="group flex items-center gap-1 text-sm font-semibold duration-300 hover:underline">
                Ir al Dashboard{" "}
                <BsArrowRight
                  className="duration-300 group-hover:translate-x-2"
                  size={15}
                />
              </button>
            ) : (
              <button className="flex items-center gap-1 text-sm font-semibold underline active:opacity-80 dark:no-underline dark:hover:underline">
                Iniciar Sesión
              </button>
            )}
          </Link>
        </div>
        <div className={`${inter.className} pt-10 text-center   lg:pt-36`}>
          {children}
        </div>
        <Footer />
      </div>
    </AOSWrapper>
  );
}
