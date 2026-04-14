import DarkGradient from "@/assets/images/dark-gradient.png";
import LightGradient from "@/assets/images/light-gradient.png";
import MobileNav from "@/components/ui/landingpage/mobilenav";
import AOSWrapper from "@/utils/AOS";
import { Link } from "@tanstack/react-router";
import { useSession } from "@/hooks/use-session";
import { ArrowRight } from "lucide-react";
import DesktopNavBar from "../ui/landingpage/desktopnav";
import Footer from "../common/footer";

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
      <div className="overflow-x-hidden font-['Inter',sans-serif] dark:bg-zinc-900 dark:text-white">
        <div
          className="absolute inset-0 bg-cover  bg-center bg-no-repeat opacity-85 "
          style={{
            backgroundImage: `url(${LightGradient})`,
            width: "100%",
          }}
        >
          <div
            className="dark:absolute dark:inset-0  dark:bg-cover dark:bg-center dark:bg-no-repeat "
            style={{
              backgroundImage: `url(${DarkGradient})`,
              width: "100%",
            }}
          />
        </div>

        <div className="top-0  z-10 flex w-full items-center justify-between bg-transparent px-4 pt-7 backdrop-blur-sm  lg:fixed lg:mb-20 lg:px-10">
          <Link to="/">
            <div className=" flex items-center justify-between duration-300  hover:opacity-70 ">
              <img
                src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
                width={40}
                height={40}
                className=" drop-shadow-xl"
                alt="logo"
              />
              <span className="font-['Black_Ops_One',sans-serif] text-2xl text-zinc-900 dark:text-zinc-200  lg:text-3xl">
                Exaya
              </span>
            </div>
          </Link>

          <MobileNav navLinks={navLinks} />
          <DesktopNavBar navLinks={navLinks} />
          {session ? (
            <a className="hidden lg:block" href="/dashboard">
              <span className="group flex items-center gap-1 text-sm font-semibold duration-300 hover:underline">
                Ir al Dashboard{" "}
                <ArrowRight
                  className="duration-300 group-hover:translate-x-2"
                  size={15}
                />
              </span>
            </a>
          ) : (
            <a className="hidden lg:block" href="/login">
              <span className="flex items-center gap-1 text-sm font-semibold underline active:opacity-80 dark:no-underline dark:hover:underline">
                Iniciar Sesión
              </span>
            </a>
          )}
        </div>
        <div className="pt-10 text-center font-['Inter',sans-serif]   lg:pt-36">
          {children}
        </div>
        <Footer />
      </div>
    </AOSWrapper>
  );
}
