import HeroStepImage from "@/assets/svg/responsive-hero.svg";
import { InfiniteMovingCards } from "@/components/landing/infinite-moving-cards";
import LandingLayout from "@/components/landing/landing-layout";
import DevicesVersionSteps from "@/components/ui/landingpage/steps";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const dancing_Script = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
  preload: true,
});

const images = [
  {
    name: "Dashboard",
    href: "https://i.ibb.co/Sx4gWLm/dashboard.png",
  },
  {
    name: "Encomiendas",
    href: "https://i.ibb.co/pjYssDD/encomiendas.png",
  },
  {
    name: "Administracion",
    href: "https://i.ibb.co/5Fdfn3S/administracion.png",
  },
  {
    name: "Contable",
    href: "https://i.ibb.co/wrbrkV8/contable-2.png",
  },
];

export default function Index() {
  return (
    <LandingLayout>
      <div className=" px-3 dark:bg-zinc-900">
        <div className="relative h-[37rem] w-full items-center justify-center  bg-transparent py-5 bg-grid-small-black/[0.15] lg:h-[67rem]">
          <div className="relative " data-aos="fade-down">
            <div className="text-3xl font-bold tracking-tight lg:mx-48 lg:text-6xl">
              Conduce tu empresa hacia la excelencia operativa
            </div>
            <p className="mt-5 px-10 tracking-tight text-zinc-700 dark:text-zinc-200 lg:px-80 lg:text-xl">
              Sistema web de gestión integral de procesos que acelera las
              operaciones de tu empresa en la industria del transporte impulsado
              con —{" "}
              <span className="bg-gradient-to-r from-red-700 to-black bg-clip-text  font-semibold   text-transparent dark:from-red-100 dark:to-white lg:bg-gradient-to-tr">
                inteligencia artificial.
              </span>
            </p>
          </div>
          <div className="relative">
            <Link
              href="/login"
              className="hover:purple-900 group z-50 mt-10 hidden w-64 cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-orange-400 bg-gradient-to-r from-orange-400 to-orange-500  py-1.5 font-semibold text-white  duration-500 hover:shadow-2xl   hover:shadow-orange-700 active:opacity-70 dark:shadow-orange-500   lg:inline-flex  lg:py-3 lg:text-xl "
            >
              <span className="duration-300 group-hover:-translate-x-1 ">
                Pruébalo gratis
              </span>

              <HiOutlineArrowNarrowRight
                size={25}
                className="duration-500 group-hover:translate-x-2"
              />
            </Link>
          </div>
          <div className="relative my-24 flex flex-col items-center justify-center overflow-hidden rounded-md bg-transparent antialiased dark:bg-transparent dark:bg-grid-white/[0.05]">
            <InfiniteMovingCards
              items={images}
              direction="right"
              speed="slow"
            />
          </div>

          {/* <div className="flex flex-col overflow-hidden  lg:min-h-[670px]">
            <ContainerScroll />
          </div> */}
          <blockquote className="hidden justify-end px-10 text-right lg:flex lg:text-3xl">
            <p className={`${dancing_Script.className}  `}>
              La elección
              <span
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="mx-2 rounded-lg bg-gradient-to-tr from-yellow-400 to-red-400 px-2 text-white   lg:text-3xl"
              >
                SaaS
              </span>
              de las empresas líderes
            </p>
          </blockquote>
        </div>
      </div>
      <div className=" my-24 space-y-3  px-4  dark:bg-zinc-900 lg:px-0">
        <h1 className="mx-10 pt-20 text-2xl font-bold tracking-tight lg:mt-0  lg:text-4xl">
          Versionamiento para Control Total
        </h1>
        <div className="lg:font-semibold ">
          <p className="px-1 tracking-tight  lg:px-72">
            Monitorea y controla el estado de tus operaciones en tiempo real,
            utilizando las versiones — mobile — web y no perder de vista ningún
            detalle.
          </p>
        </div>
      </div>
      <div className=" mx-auto flex flex-col items-center justify-center gap-8 px-4 pb-12 text-left dark:bg-zinc-900  lg:w-3/4 lg:flex-row lg:items-start lg:pb-36">
        <Image
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={HeroStepImage}
          alt="banner"
          data-aos="fade-left"
          className=" rounded-2xl "
        />

        <DevicesVersionSteps />
      </div>
    </LandingLayout>
  );
}
