import LoginGradientLight from "@/assets/images/login-gradient-light.png";
import LoginGradientDark from "@/assets/images/login-gradient-dark.png";
import VideoBackground from "@/components/exaya/video-background";
import AppHead from "@/components/landing/head";
import { useNotification } from "@/context/NotificationContext";
import styles from "@/styles/login.module.css";
import AOSWrapper from "@/utils/AOS";
import { Checkbox, Form, Input, Spin } from "antd";
import type { FormInstance } from "antd/es/form";
import { signIn } from "next-auth/react";
import { Black_Ops_One, Literata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { GoKey } from "react-icons/go";
import { HiOutlineArrowLeft, HiOutlineUser } from "react-icons/hi";

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
  const { openNotification } = useNotification();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormInstance>(null);
  const router = useRouter();

  async function onFinish(values: TLogin) {
    setLoading(true);
    const result = await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
    });
    if (result?.error) {
      openNotification({
        message: "Error de autenticación",
        description:
          "Verifique sus credenciales e intente de nuevo, recuerde que las credenciales son precreadas",
        placement: "topRight",
        type: "error",
      });
    } else {
      router.push("/dashboard");
    }
    setLoading(false);
  }

  return (
    <div
      className={` ${literata.className} relative flex  h-screen bg-zinc-100/50 dark:bg-black`}
    >
      <AppHead title="Login" />
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        className=" absolute z-10 m-5 flex items-center gap-1"
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
          width={50}
          height={50}
          title="Exaya"
          alt="logo"
          priority
        />
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
      <h5 className=" absolute bottom-5 left-16 z-10 text-sm font-extralight  text-zinc-300 ">
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
        className="fixed right-3 top-3 z-10 flex items-center justify-center gap-1 text-sm underline hover:opacity-60  "
      >
        <HiOutlineArrowLeft />
        Atrás
      </Link>
      <VideoBackground />

      <div
        style={{
          backgroundImage: `url(${LoginGradientLight.src})`,
        }}
        className={` ${literata.className} flex  w-full min-w-[60%] flex-col items-center     justify-center bg-cover pl-5 backdrop-blur-2xl`}
      >
        <div
          className="dark:absolute dark:inset-0 dark:bg-cover"
          style={{
            backgroundImage: `url(${LoginGradientDark.src})`,
          }}
        />
        <h3
          className={`  bg-gradient-to-l from-black to-orange-500 bg-clip-text  text-left text-5xl font-bold text-transparent drop-shadow-xl  dark:from-orange-600 dark:to-zinc-100   `}
        >
          Inicio de Sesión
        </h3>
        <div className="mb-10 text-center">
          <h4 className="mt-2 text-sm dark:text-zinc-300">
            Las credenciales son precreadas, solicítalas en el área de TI
          </h4>
        </div>
        <AOSWrapper>
          <Form
            ref={formRef}
            autoComplete="on"
            className={`${literata.className} w-[400px] drop-shadow-md `}
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
          <div className="flex gap-4 p-4 text-xs  text-zinc-600 dark:text-zinc-400">
            <p className="flex items-center gap-1 font-mono ">
              <HiOutlineUser /> <span>ramiro</span>
            </p>
            <p className="flex items-center gap-1 font-mono">
              <GoKey /> <span>ramiro-exaya</span>
            </p>
          </div>
          <div className="fixed bottom-0 right-0 z-10 p-2  text-xs text-zinc-700 dark:text-zinc-400">
            <h1 className="font-mono">v2.10.25</h1>
          </div>
        </AOSWrapper>
      </div>
    </div>
  );
}
