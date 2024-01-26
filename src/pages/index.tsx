import Asset3D4 from "@/assets/3d-asset-4.png";
import Asset3D5 from "@/assets/3d-asset-5.png";
import HeroStepImage from "@/assets/svg/hero-image.svg";
import LandingLayout from "@/components/landing-layout";
import DevicesVersionSteps from "@/components/ui/landingpage/steps";
import AOSWrapper from "@/utils/AOS";
import "animate.css";
import { Tag } from "antd";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import ExayaPreview from "@/assets/exaya-preview.png";

const dancing_Script = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
  preload: true,
});

export default function Index() {
  return (
    <LandingLayout>
      <AOSWrapper>
        <div>
          <div>
            <div className="relative " data-aos="fade-down">
              <div className="flex text-3xl font-bold tracking-tight lg:mx-40 lg:text-6xl">
                Conduce tu empresa hacia la excelencia operativa
              </div>
              {/* //TODO: < br/> separation changes it's place win mobile version  */}
              <p className="mt-5 px-10 font-semibold tracking-tight lg:px-80 lg:text-xl">
                El socio tecnológico que acelera las operaciones de tu empresa
                en la industria del transporte impulsado con —{" "}
                <span className="bg-gradient-to-tr from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  inteligencia artificial.
                </span>
              </p>
            </div>
            <div className="relative">
              <Link
                href="/dashboard"
                className="hover:purple-900 bg- group mt-10 inline-flex cursor-pointer items-center rounded-xl border-2 border-orange-400  bg-gradient-to-r from-orange-400 to-orange-500 px-3 py-1.5  font-semibold text-white duration-500   hover:px-10 hover:shadow-2xl hover:shadow-orange-700  active:opacity-70 lg:px-5  lg:py-3 lg:text-xl "
              >
                <BsArrowRight className="mr-3  duration-300 group-hover:mr-2 lg:mr-5 " />
                Pruébalo gratis
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
                <p className={`${dancing_Script.className} `}>
                  La elección
                  <Tag
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    className="mx-2 rounded-lg bg-gradient-to-tr  from-yellow-400 to-red-400 px-2 text-white  lg:text-3xl"
                  >
                    SaaS
                  </Tag>
                  de las empresas líderes
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        <div className=" mb-24 mt-10  space-y-3 px-4 lg:px-0">
          <h1 className="mx-10 text-2xl font-bold tracking-tight  lg:text-4xl">
            Versionamiento para Control Total
          </h1>
          {/* //TODO: < br/> separation changes it's place win mobile version  */}
          <div className="font-semibold ">
            <p className="tracking-tight lg:px-72">
              Monitorea y controla el estado de tus operaciones en tiempo real,
              utilizando las versiones — mobile como — web de nuestra
              plataforma, para no perder de vista ningún detalle.
            </p>
          </div>
        </div>
        <div className=" mx-3 flex flex-col items-start justify-center gap-2  text-left lg:mr-44 lg:flex-row">
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={HeroStepImage}
            alt="banner"
            data-aos="fade-left"
            className="flex  rounded-2xl drop-shadow-xl"
            width={900}
          />

          <DevicesVersionSteps />
        </div>
      </AOSWrapper>
    </LandingLayout>
  );
}
