import Asset3D4 from "@/assets/3d-asset-4.png";
import LandingBanner4 from "@/assets/landing-banner-4.svg";
import LandingLayout from "@/components/landing-layout";
import DevicesVersionSteps from "@/components/ui/login/steps";
import AOSWrapper from "@/utils/AOS";
import { FiArrowRightCircle } from "react-icons/fi";
import "animate.css";
import { Image as AntImage, Tag } from "antd";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const dancing_Script = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
});

export default function Index() {
  return (
    <LandingLayout>
      <AOSWrapper>
        <div data-aos="fade-up">
          <div className="space-y-14  px-7 py-16">
            <div className="relative space-y-7">
              <h1 className="text-3xl font-bold tracking-tight lg:mx-20 lg:text-7xl">
                Conduce tu empresa hacia la excelencia operativa
              </h1>
              {/* //TODO: < br/> separation changes it's place win mobile version  */}
              <div className="space-y-3.5 font-semibold lg:text-2xl ">
                <p className="tracking-tight">
                  El socio tecnológico que acelera el crecimiento de tu empresa
                  en la industria del transporte
                </p>
                <blockquote className="lg:text-4xl">
                  <p className={`${dancing_Script.className} `}>
                    "La elección
                    <Tag
                      color="gold-inverse"
                      data-aos="flip-up"
                      data-aos-delay="1000"
                      data-aos-duration="600"
                      className={`${dancing_Script.className}   mx-2 rounded-lg  px-2 drop-shadow-lg lg:text-4xl `}
                    >
                      SaaS
                    </Tag>
                    de las empresas líderes"
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="relative">
              <Link
                href="/dashboard"
                className="hover:purple-900 group inline-flex items-center rounded-full border-b-4 border-orange-600 bg-orange-500 px-5 py-2  font-semibold text-zinc-200 shadow-lg shadow-orange-400   duration-500 hover:bg-orange-500 hover:px-14 active:bg-orange-700 lg:px-10  lg:py-5 lg:text-2xl "
              >
                <FiArrowRightCircle className="mr-4 duration-300 group-hover:mr-2 lg:mr-7 " />
                Ver Demo
              </Link>

              <Image
                src={Asset3D4}
                // width = {80 mobile}
                width={130}
                height={130}
                title="Exaya"
                className="animate__animated animate__fadeInDown animate__delay-2s absolute -top-16 right-0 rotate-45 drop-shadow-xl "
                alt="asset"
              />
            </div>
            <AntImage.PreviewGroup
              preview={{
                onChange: (current, prev) =>
                  console.log(`current index: ${current}, prev index: ${prev}`),
              }}
            >
              <div className="flex flex-col justify-center lg:flex-row  ">
                <AntImage
                  src="https://imgur.com/UH4xUQO.png"
                  alt="banner"
                  data-aos="fade-right"
                  className=" reponsive-image rounded-2xl        
              duration-300"
                  //300 mobile
                  style={{
                    width: "90%",
                  }}
                />
                <AntImage
                  src="https://imgur.com/4D47umW.png"
                  alt="banner"
                  className="rounded-2xl duration-300 
              "
                  style={{
                    width: "90%",
                  }}
                />
                <AntImage
                  src="https://imgur.com/F7fNgEc.png"
                  alt="banner"
                  data-aos="fade-left"
                  className=" rounded-2xl duration-300  
             "
                  style={{
                    width: "90%",
                  }}
                />
              </div>
            </AntImage.PreviewGroup>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className=" mx-3 flex flex-col items-center justify-center gap-2  text-left lg:mx-40 lg:flex-row"
        >
          <Image
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
