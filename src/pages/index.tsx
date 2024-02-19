import Asset3D4 from "@/assets/3d-asset-4.png";
import Asset3D5 from "@/assets/3d-asset-5.png";
import ExayaPreview from "@/assets/exaya-preview.png";
import HeroStepImage from "@/assets/icons/svg/reponsive-hero.svg";
import LandingLayout from "@/components/landing-layout";
import DevicesVersionSteps from "@/components/ui/landingpage/steps";
import "animate.css";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const dancing_Script = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
  preload: true,
});

export default function Index() {
  return (
    <LandingLayout>
      <div className="px-3">
        <div>
          <div className="relative " data-aos="fade-down">
            <div className="flex text-3xl font-bold tracking-tight  lg:mx-40 lg:text-6xl">
              Conduce tu empresa hacia la excelencia operativa
            </div>
            <p className="mt-5 px-10 font-semibold tracking-tight lg:px-80 lg:text-xl">
              El socio tecnológico que acelera las operaciones de tu empresa en
              la industria del transporte impulsado con —{" "}
              <span className="bg-gradient-to-l from-red-500 via-orange-500  to-yellow-500 bg-clip-text text-transparent lg:bg-gradient-to-tr">
                inteligencia artificial.
              </span>
            </p>
          </div>
          <div className="relative">
            <Link
              href="/dashboard"
              className="hover:purple-900 group mt-10 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-orange-400 bg-gradient-to-r from-orange-400 to-orange-500 px-3 py-1.5  font-semibold text-white duration-500   hover:px-10 hover:shadow-2xl hover:shadow-orange-700  active:opacity-70 lg:px-5  lg:py-3 lg:text-xl "
            >
              <span className="duration-300 group-hover:-translate-x-2">
                Pruébalo gratis
              </span>

              <BsArrowRight
                className="duration-300 group-hover:translate-x-3"
                strokeWidth={0.7}
              />
            </Link>

            <Image
              src={Asset3D4}
              // width = {80 mobile}
              className="animate__animated animate__fadeInDown  animate__delay-1s absolute right-12 top-28 w-10 drop-shadow-2xl lg:right-56 lg:top-48 lg:h-28    lg:w-28 "
              alt="asset"
            />
            <Image
              src={Asset3D5}
              // width = {80 mobile}
              className="animate__animated animate__fadeInDown animate__delay-1s absolute -top-32 left-28 hidden h-64 w-64 drop-shadow-2xl lg:flex "
              alt="asset"
            />
          </div>
          <div className="relative">
            <Image
              src={ExayaPreview}
              alt="banner"
              className="rounded-2x duration-300"
              data-aos="fade-up"
              width={1500}
              height={1000}
              priority
            />
            <blockquote className=" absolute -bottom-2 right-44 hidden lg:bottom-36 lg:flex lg:text-4xl">
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
      </div>
      <div className=" mb-24 mt-24  space-y-3 px-4 lg:px-0">
        <h1 className="mx-10 text-2xl font-bold tracking-tight  lg:text-4xl">
          Versionamiento para Control Total
        </h1>
        <div className="font-semibold ">
          <p className="px-1 tracking-tight  lg:px-72">
            Monitorea y controla el estado de tus operaciones en tiempo real,
            utilizando las versiones — mobile — web de nuestra plataforma, para
            no perder de vista ningún detalle.
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center gap-2 px-4 text-left  lg:mr-44 lg:flex-row lg:items-start">
        <Image
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={HeroStepImage}
          alt="banner"
          data-aos="fade-left"
          className="  h-1/2 w-1/2 rounded-2xl  drop-shadow-xl  lg:h-[900px] lg:w-[1500px] "
        />

        <DevicesVersionSteps />
      </div>
    </LandingLayout>
  );
}
