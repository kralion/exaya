import LoginGradientLight from "@/assets/images/login-gradient-light.png";
import LoginGradientDark from "@/assets/images/login-gradient-dark.png";
import VideoBackground from "@/components/exaya/video-background";
import AppHead from "@/components/landing/head";
import styles from "@/styles/login.module.css";
import AOSWrapper from "@/utils/AOS";
import { Checkbox, Form, Input, Spin } from "antd";
import type { FormInstance } from "antd/es/form";
import { signIn, useSession } from "next-auth/react";
import { Black_Ops_One, Literata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GoKey } from "react-icons/go";
import { HiOutlineArrowLeft, HiOutlineUser } from "react-icons/hi";
import { useNotification } from "@/context/notification";

const literata = Literata({
  weight: "400",
  subsets: ["latin-ext"],
});

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
});

type TLogin = {
  username: string;
  password: string;
};
export default function Login() {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const formRef = useRef<FormInstance>(null);
  const router = useRouter();
  const { openNotification } = useNotification();
  async function onFinish(values: TLogin) {
    setLoading(true);
    const result = await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
    });
    if (result?.error) {
      openNotification({
        message: "Error de Autenticación",
        description: result.error,
        type: "error",
        placement: "topRight",
      });
    } else {
      router.push("/dashboard");
    }

    setLoading(false);
  }
  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <div
      className={` ${literata.className} relative flex  h-screen bg-zinc-100/50 dark:bg-black`}
    >
      <AppHead title="Login" />
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        className=" absolute z-10 m-5 hidden items-center gap-1 lg:flex  "
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
          width={50}
          height={50}
          title="Exaya"
          alt="logo"
          priority
        />
        <div className="flex items-center gap-1">
          <h2
            className={`bg-white bg-clip-text text-left text-3xl text-transparent ${blackOpsOne.className}`}
          >
            Exaya
          </h2>
          <h5 className="text-zinc-300">
            <span className="text-orange-400">|</span> Sistema Web de Gestión
            Operativa
          </h5>
        </div>
      </div>
      <h5 className="absolute bottom-5 left-16 z-10 hidden text-sm font-extralight text-zinc-300  lg:block ">
        Desarrollado por{" "}
        <Link
          href="https://twitter.com/brayanpaucar_"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white underline hover:opacity-80"
        >
          Brayan Paucar
        </Link>
      </h5>

      <Link
        href="/"
        className="fixed right-3 top-8 z-10 flex items-center justify-center gap-1 text-sm underline hover:opacity-60 lg:top-3  "
      >
        <HiOutlineArrowLeft />
        Ir al inicio
      </Link>
      <VideoBackground />

      <div
        style={{
          backgroundImage: `url(${LoginGradientLight.src})`,
        }}
        className={` ${literata.className} flex h-screen  w-full flex-col items-center justify-center    pl-5 backdrop-blur-2xl lg:min-w-[60%] lg:bg-cover`}
      >
        <div className="fixed left-5 top-5 z-10 flex items-center justify-center gap-1  lg:hidden  ">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
            width={50}
            height={50}
            title="Exaya"
            alt="logo"
            priority
          />
          <h2
            className={`bg-black bg-clip-text text-left text-3xl text-transparent ${blackOpsOne.className}`}
          >
            Exaya
          </h2>
        </div>
        <div
          className="dark:absolute dark:inset-0 dark:bg-cover"
          style={{
            backgroundImage: `url(${LoginGradientDark.src})`,
          }}
        />
        <h3
          className={`   bg-gradient-to-l from-black to-orange-500 bg-clip-text text-left  text-2xl font-bold text-transparent drop-shadow-xl dark:from-orange-600 dark:to-orange-300  lg:text-5xl   `}
        >
          Inicio de Sesión
        </h3>
        <div className="z-50 mb-10 text-center">
          <h4 className="mt-2 px-14 text-xs dark:text-white lg:px-0 lg:text-sm">
            Las credenciales son precreadas, solicítalas en el área de TI
          </h4>
        </div>
        <AOSWrapper>
          <Form
            ref={formRef}
            autoComplete="on"
            className={`${literata.className} w-[300px] drop-shadow-md lg:w-[400px] `}
            name="control-ref"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onFinish={onFinish}
          >
            <h3 className="mb-2">Usuario</h3>
            <Form.Item
              name="username"
              className={`${literata.className} `}
              rules={[
                {
                  required: true,
                  message: "* Ingrese su usuario",
                },
              ]}
            >
              <Input
                type="text"
                autoFocus
                className={`rounded-lg px-3  py-2    ${literata.className}`}
              />
            </Form.Item>

            <h3 className="mb-2">Contraseña</h3>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "* Escriba la contraseña",
                },
              ]}
            >
              <Input.Password
                className={`rounded-lg  px-3  py-2    ${literata.className}`}
                type="password"
              />
            </Form.Item>
            <div className="flex flex-col gap-14">
              <Checkbox
                className={literata.className}
                // onChange={onRememberCredentialsChange}
              >
                Recordar contraseña
              </Checkbox>
              <button
                type="submit"
                className={styles.button}
                disabled={loading}
              >
                {loading ? <Spin size="small" /> : "Ingresar"}
              </button>
            </div>
          </Form>
          <div className="z-10 flex gap-4 p-4 text-xs  text-zinc-600 dark:text-zinc-400">
            <p className="flex items-center gap-1 font-mono ">
              <HiOutlineUser /> <span>brayan</span>
            </p>
            <p className="flex items-center gap-1 font-mono">
              <GoKey /> <span>Exay4</span>
            </p>
          </div>
          <div className="fixed bottom-0 right-0 z-10 p-2  text-xs">
            <h1 className="font-mono dark:text-white">v3.2.1</h1>
          </div>
        </AOSWrapper>
      </div>
    </div>
  );
}
