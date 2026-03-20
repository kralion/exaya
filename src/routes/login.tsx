import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import VideoBackground from "@/components/common/video-background";
import AppHead from "@/components/common/head";
import styles from "@/styles/login.module.css";
import AOSWrapper from "@/utils/AOS";
import { Checkbox, Form, Input, notification, Spin } from "antd";
import type { FormInstance } from "antd/es/form";
import { useEffect, useRef, useState } from "react";
import { GoKey } from "react-icons/go";
import { HiOutlineArrowLeft, HiOutlineUser } from "react-icons/hi";
import { useSession } from "@/context/SessionContext";

type NotificationType = "success" | "info" | "warning" | "error";

type TLogin = {
  username: string;
  password: string;
};

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const { data: session, status, signIn } = useSession();
  const navigate = useNavigate();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: "Credenciales Incorrectas",
      description: "Recueda que las credenciales son precreadas",
    });
  };

  const formRef = useRef<FormInstance>(null);

  useEffect(() => {
    if (status === "authenticated" && session) {
      navigate({ to: "/dashboard" });
    }
  }, [status, session, navigate]);

  async function onFinish(values: TLogin) {
    setLoading(true);
    const result = await signIn(values.username, values.password);
    if (result.ok) {
      navigate({ to: "/dashboard" });
    } else {
      openNotificationWithIcon("error");
    }
    setLoading(false);
  }

  return (
    <>
      {contextHolder}
      <div className="relative flex h-screen bg-zinc-100/50 dark:bg-black">
        <AppHead title="Login" />
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          className="absolute z-10 m-5 hidden items-center gap-1 lg:flex"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
            width={50}
            height={50}
            title="Exaya"
            alt="logo"
          />
          <div className="flex items-center gap-1">
            <h2 className="bg-white bg-clip-text text-left text-3xl text-transparent">
              Exaya
            </h2>
            <h5 className="text-zinc-300">
              <span className="text-orange-400">|</span> Sistema Web de Gestión
              Operativa
            </h5>
          </div>
        </div>
        <h5 className="absolute bottom-5 left-16 z-10 hidden text-sm font-extralight text-zinc-300 lg:block">
          Desarrollado por{" "}
          <a
            href="https://twitter.com/brayanpaucar_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:opacity-80"
          >
            Brayan Paucar
          </a>
        </h5>

        <Link
          to="/"
          className="fixed right-3 top-8 z-10 flex items-center justify-center gap-1 text-sm underline hover:opacity-60 lg:top-3"
        >
          <HiOutlineArrowLeft />
          Ir al inicio
        </Link>
        <VideoBackground />

        <div
          className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 pl-5 backdrop-blur-2xl dark:from-zinc-900 dark:to-black lg:min-w-[60%] lg:bg-cover"
        >
          <div className="fixed left-5 top-5 z-10 flex items-center justify-center gap-1 lg:hidden">
            <img
              src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
              width={50}
              height={50}
              title="Exaya"
              alt="logo"
            />
            <h2 className="bg-black bg-clip-text text-left text-3xl text-transparent">
              Exaya
            </h2>
          </div>

          <h3 className="bg-gradient-to-l from-black to-orange-500 bg-clip-text text-left text-2xl font-bold text-transparent drop-shadow-xl dark:from-orange-600 dark:to-orange-300 lg:text-5xl">
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
              className="w-[300px] drop-shadow-md lg:w-[400px]"
              name="control-ref"
              onFinish={onFinish}
            >
              <h3 className="mb-2">Usuario</h3>
              <Form.Item
                name="username"
                rules={[{ required: true, message: "* Ingrese su usuario" }]}
              >
                <Input type="text" autoFocus className="rounded-lg px-3 py-2" />
              </Form.Item>

              <h3 className="mb-2">Contraseña</h3>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "* Escriba la contraseña" }]}
              >
                <Input.Password className="rounded-lg px-3 py-2" type="password" />
              </Form.Item>
              <div className="flex flex-col gap-14">
                <Checkbox>Recordar contraseña</Checkbox>
                <button type="submit" className={styles.button} disabled={loading}>
                  {loading ? <Spin size="small" /> : "Ingresar"}
                </button>
              </div>
            </Form>
            <div className="z-10 flex gap-4 p-4 text-xs text-zinc-600 dark:text-zinc-400">
              <p className="flex items-center gap-1 font-mono">
                <HiOutlineUser /> <span>exaya</span>
              </p>
              <p className="flex items-center gap-1 font-mono">
                <GoKey /> <span>Exay4</span>
              </p>
            </div>
            <div className="fixed bottom-0 right-0 z-10 p-2 text-xs">
              <h1 className="font-mono dark:text-white">v4.1.1</h1>
            </div>
          </AOSWrapper>
        </div>
      </div>
    </>
  );
}
