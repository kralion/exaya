import Asset3D5 from "@/assets/images/3d-asset-5.png";
import HeroStepImage from "@/assets/svg/responsive-hero.svg";
import LandingLayout from "@/components/landing/landing-layout";
import { ContainerScroll } from "@/components/landing/container-scroll-animation";
import DevicesVersionSteps from "@/components/ui/landingpage/steps";
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
      <div className="px-3 dark:bg-zinc-900">
        <div className="relative h-[37rem] w-full items-center justify-center  bg-transparent py-5 bg-dot-black/[0.15] lg:h-[67rem]">
          <div className="relative " data-aos="fade-down">
            <div className="flex bg-gradient-to-r from-zinc-800 to-zinc-950 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-white dark:to-zinc-300  lg:mx-48 lg:text-6xl">
              Conduce tu empresa hacia la excelencia operativa
            </div>
            <p className="mt-5 px-10 tracking-tight text-zinc-700 dark:text-zinc-200 lg:px-80 lg:text-xl">
              El socio tecnológico que acelera las operaciones de tu empresa en
              la industria del transporte impulsado con —{" "}
              <span className="bg-gradient-to-r from-red-700 to-black bg-clip-text  font-semibold   text-transparent dark:from-red-100 dark:to-white lg:bg-gradient-to-tr">
                inteligencia artificial.
              </span>
            </p>
          </div>
          <div className="relative">
            <Link
              href="/dashboard"
              className="hover:purple-900 group  mt-10 hidden cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-orange-400 bg-gradient-to-r from-orange-400 to-orange-500 px-3 py-1.5 font-semibold text-white  duration-500 hover:px-10 hover:shadow-2xl   hover:shadow-orange-700 active:opacity-70   lg:inline-flex lg:px-5  lg:py-3 lg:text-xl "
            >
              <span className="duration-300 group-hover:-translate-x-2 ">
                Pruébalo gratis
              </span>

              <BsArrowRight
                className="duration-300 group-hover:translate-x-3"
                strokeWidth={0.7}
              />
            </Link>
            <Image
              src={Asset3D5}
              // width = {80 mobile}
              data-aos="fade-down"
              data-aos-duration="1500"
              className="absolute -top-32 left-28 hidden h-64 w-64 drop-shadow-2xl lg:flex "
              alt="asset"
            />
          </div>

          <div className=" mt-10 flex flex-col overflow-hidden lg:-mt-20  lg:min-h-[670px]">
            <ContainerScroll />
          </div>
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
      <div className=" space-y-3 px-4  py-24  dark:bg-zinc-900 lg:px-0">
        <h1 className="mx-10 text-2xl font-bold tracking-tight  lg:text-4xl">
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
      <div className=" flex flex-col items-center justify-center gap-2 px-4 text-left dark:bg-zinc-900  lg:flex-row lg:items-start lg:pr-44">
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

export const users = [
  {
    name: "Manu Arora",
    designation: "Founder, Algochurn",
    image: "https://picsum.photos/id/10/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Founder, Sarah's Kitchen",
    image: "https://picsum.photos/id/11/300/300",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Software Engineer, Tech Corp",
    image: "https://picsum.photos/id/12/300/300",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Product Manager, Innovate Inc",
    image: "https://picsum.photos/id/13/300/300",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "Data Scientist, DataWorks",
    image: "https://picsum.photos/id/14/300/300",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "UX Designer, DesignHub",
    image: "https://picsum.photos/id/15/300/300",
    badge: "Mentor",
  },
  {
    name: "Michael Miller",
    designation: "CTO, FutureTech",
    image: "https://picsum.photos/id/16/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Brown",
    designation: "CEO, StartUp",
    image: "https://picsum.photos/id/17/300/300",
  },
  {
    name: "James Wilson",
    designation: "DevOps Engineer, CloudNet",
    image: "https://picsum.photos/id/18/300/300",
    badge: "Something",
  },
  {
    name: "Patricia Moore",
    designation: "Marketing Manager, MarketGrowth",
    image: "https://picsum.photos/id/19/300/300",
    badge: "Mentor",
  },
  {
    name: "Richard Taylor",
    designation: "Frontend Developer, WebSolutions",
    image: "https://picsum.photos/id/20/300/300",
  },
  {
    name: "Linda Anderson",
    designation: "Backend Developer, ServerSecure",
    image: "https://picsum.photos/id/21/300/300",
  },
  {
    name: "William Thomas",
    designation: "Full Stack Developer, FullStack",
    image: "https://picsum.photos/id/22/300/300",
    badge: "Badger",
  },
  {
    name: "Elizabeth Jackson",
    designation: "Project Manager, ProManage",
    image: "https://picsum.photos/id/23/300/300",
    badge: "Mentor",
  },
  {
    name: "David White",
    designation: "Database Administrator, DataSafe",
    image: "https://picsum.photos/id/24/300/300",
    badge: "Advocate",
  },
  {
    name: "Jennifer Harris",
    designation: "Network Engineer, NetConnect",
    image: "https://picsum.photos/id/25/300/300",
  },
  {
    name: "Charles Clark",
    designation: "Security Analyst, SecureIT",
    image: "https://picsum.photos/id/26/300/300",
  },
  {
    name: "Susan Lewis",
    designation: "Systems Analyst, SysAnalyse",
    image: "https://picsum.photos/id/27/300/300",
  },
  {
    name: "Joseph Young",
    designation: "Mobile Developer, AppDev",
    image: "https://picsum.photos/id/28/300/300",
    badge: "Mentor",
  },
  {
    name: "Margaret Hall",
    designation: "Quality Assurance, BugFree",
    image: "https://picsum.photos/id/29/300/300",
    badge: "Developer",
  },
];
