import LoginGradient from "@/assets/login-gradient.png";
import AppHead from "@/components/head";
import VideoBackground from "@/components/ui/video-background";
import { useNotification } from "@/context/NotificationContext";
import styles from "@/styles/login.module.css";
import AOSWrapper from "@/utils/AOS";
import { api } from "@/utils/api";
import "animate.css";
import { Checkbox, Form, Input, Spin } from "antd";
import { signIn } from "next-auth/react";
import { Black_Ops_One, Literata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { GoKey } from "react-icons/go";
import type { FormInstance } from "antd/es/form";
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
  // const actual = api.version.exayaVersion.useQuery({
  //   version: 11,
  // });

  const { openNotification } = useNotification();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormInstance>(null);
  async function onFinish(values: TLogin) {
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: true,
        callbackUrl: "/dashboard",
      });

      if (result?.error) {
        openNotification({
          message: result.error,
          description: "Usuario o contraseña incorrectos",
          placement: "topRight",
          type: "error",
        });
      }
    } catch (error) {
      openNotification({
        message: "Falló la operación",
        description: "Verifique sus credenciales",
        placement: "topRight",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={` ${literata.className} relative flex  h-screen bg-zinc-100/50 dark:bg-black`}
    >
      <AppHead title="Login" />
      <div className="animate__animated animate__delay-1s animate__flipInX absolute z-10 m-5 flex items-center gap-1">
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
      <h5 className="animate__animated animate__delay-1s animate__fadeIn absolute bottom-5 left-5 z-50 text-sm font-extralight  text-zinc-300 ">
        Desarrollado por{" "}
        <Link
          href="https://twitter.com/brayanpaucar_"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white hover:underline"
        >
          @BrayanPaucar
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
          backgroundImage: `url(${LoginGradient.src})`,
        }}
        className={` ${literata.className} flex w-full min-w-[60%] flex-col items-center  justify-center bg-cover pl-5`}
      >
        <h3
          className={`  bg-gradient-to-l from-black  to-orange-500 bg-clip-text text-left text-5xl font-bold  text-transparent drop-shadow-xl   `}
        >
          Inicio de Sesión
        </h3>
        <div className="mb-10 text-center">
          <h4 className="mt-2 text-sm">
            Las credenciales son precreadas, solicítalas en el área de TI
          </h4>
        </div>
        <AOSWrapper>
          <Form
            ref={formRef}
            data-aos="fade-in"
            data-aos-duration="500"
            autoComplete="on"
            className={`${literata.className} w-[400px] drop-shadow-md `}
            name="control-ref"
            onFinish={(values: TLogin) => {
              onFinish(values).catch((error) => console.error(error));
            }}
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
                className={`rounded-lg px-5  py-2    ${literata.className}`}
              />
            </Form.Item>

            <h4 className="mb-2">Contraseña</h4>

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
                className={`rounded-lg  px-5  py-2    ${literata.className}`}
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
          <div className="flex gap-4 p-4 text-xs  text-zinc-600">
            <p className="flex items-center gap-1 font-mono ">
              <HiOutlineUser /> <span>ramiro</span>
            </p>
            <p className="flex items-center gap-1 font-mono">
              <GoKey /> <span>ramiro-exaya</span>
            </p>
          </div>
          <div className="fixed bottom-0 right-0 z-10 p-2  text-sm text-slate-600">
            <h1 className="font-mono">
              {/* Versión: {actual.data?.currentVersion} */}
            </h1>
          </div>
        </AOSWrapper>
      </div>
    </div>
  );
}
