import MobileNav from "@/components/ui/landingpage/mobilenav";
import AOSWrapper from "@/utils/AOS";
import { Black_Ops_One, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "./footer";
import LandingDepth from "@/assets/landing-depth.jpg";
import DesktopNavBar from "./ui/landingpage/desktopnav";
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
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    const savedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsChecked(savedTheme ? savedTheme === "dark" : prefersDark);
  }, []);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newChecked ? "dark" : "light");
    }
    document.documentElement.classList.toggle("dark");
  };

  return (
    <AOSWrapper>
      <div className={` ${inter.className}  dark:bg-zinc-800 dark:text-white`}>
        <div
          className="absolute inset-0 bg-cover  bg-center bg-no-repeat opacity-85 "
          style={{
            backgroundImage: `url(${LandingDepth.src})`,
            width: "100%",
          }}
        />

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
                className={` text-2xl text-zinc-900  lg:text-3xl ${blackOpsOne.className}`}
              >
                Exaya
              </span>
            </div>
          </Link>
          <DesktopNavBar navLinks={navLinks} />
          <ThemeToggle
            isChecked={isChecked}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
        <div className={`${inter.className} pt-10 text-center   lg:pt-36`}>
          {children}
        </div>
        <Footer />
      </div>
    </AOSWrapper>
  );
}
