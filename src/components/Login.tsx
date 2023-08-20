import Link from "next/link";
import Image from "next/image";
import { Literata, Mansalva } from "next/font/google";

const literata = Literata({
  weight: "400",
  subsets: ["latin-ext"],
  preload: true,
});

const mansalva = Mansalva({
  weight: "400",
  subsets: ["latin-ext"],
  preload: true,
});

function Login() {
  return (
    <div className="mx-5">
      <header
        data-aos="slide-right"
        data-aos-delay="200"
        data-aos-duration="1000"
        className="m-3 flex items-center"
      >
        <Image
          width={40}
          height={40}
          src="https://img.icons8.com/?size=1x&id=l6Tcv6hLPzY9&format=png"
          alt="logo"
        />
        <h2 className={`mt-1 text-center font-bold  ${mansalva.className} `}>
          Expreso <br /> Ayacucho
        </h2>
      </header>
      <div
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className={` ${literata.className} my-7 flex justify-center `}
      >
        <div className="flex w-1/2 flex-col justify-center">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-semibold">EXAYA</h1>

            <h4 className="text-md mt-4">
              Las credenciales son precreadas, solicítalas en el área de TI
            </h4>
          </div>
          <div className="flex justify-center">
            <form className="flex w-[610px] flex-col justify-center">
              <div className="mb-7 flex flex-col justify-center">
                <label className="mb-3 text-xl font-black" htmlFor="username">
                  Usuario
                </label>
                <input
                  className="border-2 border-black px-5 py-2"
                  type="text"
                  name="username"
                  placeholder="Ingrese el nombre de usuario"
                />
              </div>
              <div className="flex flex-col justify-center">
                <label className="mb-3 text-xl font-black" htmlFor="password">
                  Contraseña
                </label>
                <input
                  className="border-2 border-black px-5 py-2"
                  type="password"
                  name="password"
                  placeholder="***************"
                />
              </div>
              <div className="my-3 flex">
                <input type="checkbox" className="mt-5 h-6 w-6 " />
                <label className="text-md ml-2 mt-5" htmlFor="remember">
                  Recordar contraseña
                </label>
              </div>
              <Link href="/" replace>
                <button className="mt-10 w-full bg-[#191818] px-4 py-3 text-white hover:bg-[#141313] active:bg-[#4d4c4c]">
                  Ingresar
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
