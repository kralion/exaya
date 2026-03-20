import { createFileRoute, Link } from "@tanstack/react-router";
import HeroStepImage from "@/assets/svg/responsive-hero.svg";
import { InfiniteMovingCards } from "@/components/landing/infinite-moving-cards";
import DevicesVersionSteps from "@/components/ui/landingpage/steps";
import AOSWrapper from "@/utils/AOS";
import Footer from "@/components/common/footer";

const images = [
  { name: "Dashboard", href: "https://i.ibb.co/Sx4gWLm/dashboard.png" },
  { name: "Encomiendas", href: "https://i.ibb.co/pjYssDD/encomiendas.png" },
  { name: "Administracion", href: "https://i.ibb.co/5Fdfn3S/administracion.png" },
  { name: "Contable", href: "https://i.ibb.co/wrbrkV8/contable-2.png" },
];

const navLinks = [
  { label: "Boletos", href: "/boletos" },
  { label: "Rastreo", href: "/encomiendas/rastreo" },
  { label: "Features", href: "/features" },
  { label: "Membresías", href: "/planes" },
  { label: "Contacto", href: "/contacto" },
];

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <AOSWrapper>
      <div className="overflow-x-hidden dark:bg-zinc-900 dark:text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-85 dark:from-zinc-900 dark:to-zinc-950" />
        <div className="top-0 z-10 flex w-full items-center justify-between bg-transparent px-4 pt-7 backdrop-blur-sm lg:fixed lg:mb-20 lg:px-10">
          <Link to="/">
            <div className="flex items-center justify-between duration-300 hover:opacity-70">
              <img
                src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
                width={40}
                height={40}
                className="drop-shadow-xl"
                alt="logo"
              />
              <span className="text-2xl text-zinc-900 dark:text-zinc-200 lg:text-3xl">
                Exaya
              </span>
            </div>
          </Link>
          <div className="flex gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="hidden text-sm font-semibold hover:underline lg:block"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link to="/login" className="hidden lg:block">
            <button className="flex items-center gap-1 text-sm font-semibold underline active:opacity-80 dark:no-underline dark:hover:underline">
              Iniciar Sesión
            </button>
          </Link>
        </div>
        <div className="pt-10 text-center lg:pt-36">
          <div className="px-3 dark:bg-zinc-900">
            <div className="relative h-[37rem] w-full items-center justify-center bg-transparent py-5 bg-grid-small-black/[0.15] lg:h-[67rem]">
              <div className="relative" data-aos="fade-down">
                <div className="text-3xl font-bold tracking-tight lg:mx-48 lg:text-6xl">
                  Conduce tu empresa hacia la excelencia operativa
                </div>
                <p className="mt-5 px-10 tracking-tight text-zinc-700 dark:text-zinc-200 lg:px-80 lg:text-xl">
                  Sistema web de gestión integral de procesos que acelera las
                  operaciones de tu empresa en la industria del transporte
                  impulsado con —{" "}
                  <span className="bg-gradient-to-r from-red-700 to-black bg-clip-text font-semibold text-transparent dark:from-red-100 dark:to-white lg:bg-gradient-to-tr">
                    inteligencia artificial.
                  </span>
                </p>
              </div>
              <div className="relative">
                <Link
                  to="/login"
                  className="hover:purple-900 group z-50 mt-10 hidden w-64 cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-orange-400 bg-gradient-to-r from-orange-400 to-orange-500 py-1.5 font-semibold text-white shadow-2xl shadow-orange-700 duration-500 active:opacity-70 dark:shadow-orange-500 lg:inline-flex lg:py-3 lg:text-xl"
                >
                  <span className="duration-300 group-hover:-translate-x-1">
                    Demo gratuita
                  </span>
                  <svg
                    className="h-6 w-6 duration-500 group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="relative my-24 flex flex-col items-center justify-center overflow-hidden rounded-md bg-transparent antialiased dark:bg-transparent dark:bg-grid-white/[0.05]">
                <InfiniteMovingCards
                  items={images}
                  direction="right"
                  speed="slow"
                />
              </div>
              <blockquote className="hidden justify-end px-10 text-right lg:flex lg:text-3xl">
                <p>La elección SaaS de las empresas líderes</p>
              </blockquote>
            </div>
          </div>
          <div className="my-24 space-y-3 px-4 dark:bg-zinc-900 lg:px-0">
            <h1 className="mx-10 pt-20 text-2xl font-bold tracking-tight lg:mt-0 lg:text-4xl">
              Versionamiento para Control Total
            </h1>
            <div className="lg:font-semibold">
              <p className="px-1 tracking-tight lg:px-72">
                Monitorea y controla el estado de tus operaciones en tiempo real,
                utilizando las versiones — mobile — web y no perder de vista
                ningún detalle.
              </p>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center justify-center gap-8 px-4 pb-12 text-left dark:bg-zinc-900 lg:w-3/4 lg:flex-row lg:items-start lg:pb-36">
            <img
              src={HeroStepImage}
              alt="banner"
              data-aos="fade-left"
              className="rounded-2xl"
            />
            <DevicesVersionSteps />
          </div>
        </div>
        <Footer />
      </div>
    </AOSWrapper>
  );
}
