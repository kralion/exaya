import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useSession } from "next-auth/react";
import { Black_Ops_One, Literata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const literata = Literata({
  weight: "400",
  subsets: ["latin-ext"],
  preload: true,
});

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

export default function Login() {
  const { data: session } = useSession();
  console.log(session);
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div
      data-aos="flip-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      className={` ${literata.className} flex h-screen flex-col items-center justify-center `}
    >
      <div className="mb-10 text-center">
        <div className="flex items-center justify-center gap-1">
          <Image
            src="https://img.icons8.com/?size=512&id=0jE7hnKV3NQW&format=png"
            width={50}
            height={50}
            title="Exaya"
            className="animate__animated animate__flip"
            alt="logo"
          />
          <h3
            className={`  text-left text-5xl  leading-none text-[#231335]   ${blackOpsOne.className} `}
          >
            Exaya
          </h3>
        </div>

        <h4 className="text-md mt-2">
          Las credenciales son precreadas, solicítalas en el área de TI
        </h4>
      </div>
      <form className="w-[510px] ">
        <div className="mb-7 flex flex-col justify-center">
          <label className="mb-3  text-xl font-black" htmlFor="username">
            Usuario
          </label>
          <input
            className="rounded-md border-2 border-black px-5 py-2"
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
            className="rounded-md border-2  border-black px-5 py-2"
            type="password"
            name="password"
            placeholder="***************"
          />
        </div>
        <Checkbox className={`${literata.className} my-3 `} onChange={onChange}>
          Recordar contraseña
        </Checkbox>
        <Link href="/" replace>
          <button className="mt-3.5 flex w-full items-center justify-center gap-3.5 rounded-md bg-[#231335] p-3 text-white  duration-200 hover:bg-purple-950 active:scale-110">
            Ingresar
          </button>
        </Link>
      </form>
    </div>
  );
}
