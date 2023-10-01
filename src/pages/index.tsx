import Asset3D4 from "@/assets/3d-asset-4.png";
import Asset3D5 from "@/assets/3d-asset-5.png";
import LandingBanner4 from "@/assets/landing-banner-4.svg";
import LandingLayout from "@/components/landing-layout";
import DevicesVersionSteps from "@/components/ui/login/steps";
import AOSWrapper from "@/utils/AOS";
import "animate.css";
import { Tag } from "antd";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const dancing_Script = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
});

export default function Index() {
  return (
    <LandingLayout>
      <AOSWrapper>
        <div data-aos="fade-up">
          <div>
            <div className="relative space-y-5">
              <h1 className="text-3xl font-bold tracking-tight lg:mx-20 lg:text-7xl">
                Conduce tu empresa hacia la excelencia operativa
              </h1>
              {/* //TODO: < br/> separation changes it's place win mobile version  */}
              <div className="space-y-3.5 font-semibold lg:text-2xl ">
                <p className="tracking-tight lg:px-80">
                  El socio tecnológico que acelera el crecimiento de tu empresa
                  en la industria del transporte
                </p>
              </div>
            </div>
            <div className="relative">
              <Link
                href="/dashboard"
                className="hover:purple-900 group mt-10 inline-flex items-center rounded-xl border-b-4 border-orange-600 bg-orange-500 px-3 py-1.5 font-semibold  text-zinc-200 duration-500 hover:px-10   hover:shadow-2xl hover:shadow-orange-700  active:opacity-70 lg:px-5  lg:py-3 lg:text-xl "
              >
                <BsArrowRight className="mr-3  duration-300 group-hover:mr-2 lg:mr-5 " />
                Pruébalo gratis
              </Link>

              <Image
                src={Asset3D4}
                // width = {80 mobile}
                width={130}
                height={130}
                className="animate__animated animate__fadeInDown animate__delay-2s absolute right-56 top-56 drop-shadow-2xl "
                alt="asset"
              />
              <Image
                src={Asset3D5}
                // width = {80 mobile}
                width={230}
                height={130}
                className="animate__animated animate__fadeInDown  animate__delay-2s absolute left-28 -top-32   drop-shadow-2xl "
                alt="asset"
              />
            </div>

            <Image
              src="https://imgur.com/E8l54Uu.png"
              alt="banner"
              className="rounded-2x relative  duration-300 
              "
              width={1500}
              height={1000}
            />
          </div>
          <blockquote className=" absolute bottom-36 right-44  lg:text-4xl">
            <p className={`${dancing_Script.className} `}>
              La elección
              <Tag
                color="gold-inverse"
                data-aos="flip-up"
                data-aos-duration="200"
                className={`${dancing_Script.className}   mx-2 rounded-lg  px-2 drop-shadow-lg lg:text-4xl `}
              >
                SaaS
              </Tag>
              de las empresas líderes
            </p>
          </blockquote>
        </div>
        <div className=" mb-24 mt-10 space-y-3">
          <h1 className="text-3xl font-bold tracking-tight lg:mx-20 lg:text-4xl">
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
        <div
          data-aos="zoom-in"
          className=" mx-3 flex flex-col items-center justify-center gap-2  text-left lg:mr-32 lg:flex-row"
        >
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={LandingBanner4}
            alt="banner"
            className="flex  rounded-2xl drop-shadow-xl"
            width={900}
          />

          <DevicesVersionSteps />
        </div>
      </AOSWrapper>
    </LandingLayout>
  );
}
