import MobileNav from "@/components/ui/login/mobilenav";
import ThemeToggle from "@/components/ui/login/theme-toggle";
import "animate.css";
import { Black_Ops_One, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({
  weight: ["800", "600", "300"],
  subsets: ["latin-ext"],
});
const blackOpsOne = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
});
const navLinks = [
  {
    title: "Login",
    path: "/login",
  },
  {
    title: "Features",
    path: "/features",
  },
  {
    title: "Planes",
    path: "/planes",
  },
];

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={` ${inter.className} via-orange-00  bg-gradient-to-r from-orange-300 to-yellow-300 lg:space-y-14`}
    >
      <div className="mb-16 flex items-center  justify-between bg-transparent px-3 pt-7 lg:mx-10 lg:mb-36 ">
        <Link href="/">
          <div className="flex  justify-start ">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
              //40 mobile
              width={40}
              height={40}
              className="animate__animated animate__flip"
              alt="logo"
            />
            <span
              className={` text-xl font-bold text-[#2d1a42] lg:text-3xl ${blackOpsOne.className}`}
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
                  className="flex items-center justify-center font-bold duration-300 hover:text-purple-900  "
                  href={link.path}
                >
                  <span className="mr-2">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/dashboard"
            className="hover:purple-900 group inline-flex items-center rounded-full border-1 border-black bg-transparent  px-4 py-1 font-semibold duration-500 hover:border-orange-400 hover:bg-orange-500  hover:text-white active:bg-orange-500 "
          >
            Ver Demo
          </Link>
        </div>
        <nav className="lg:hidden">
          <MobileNav />
        </nav>
      </div>
      <div className={`${inter.className} text-center `}>{children}</div>
      <footer className="pb-7 pt-24 text-center text-[12px]  lg:text-sm   ">
        © Copyright 2024 Brayan Paucar. All rights reserved.
      </footer>
    </div>
  );
}
