import LoginGradient from "@/assets/images/login-gradient.png";
import AppHead from "@/components/head";
import { useNotification } from "@/context/NotificationContext";
import type { loginSchema } from "@/schemas";
import styles from "@/styles/login.module.css";
import AOSWrapper from "@/utils/AOS";
import { api } from "@/utils/api";
import "animate.css";
import { Checkbox, Form, Input, Spin } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { FormInstance } from "antd/es/form";
import { signIn } from "next-auth/react";
import { Black_Ops_One, Literata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import { HiOutlineArrowLeft, HiOutlineUser } from "react-icons/hi";
import { GoKey } from "react-icons/go";
import type { z } from "zod";

const literata = Literata({
  weight: "400",
  subsets: ["latin-ext"],
});

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Login() {
  const router = useRouter();
  const version = api.version.exayaVersion.useQuery({
    text: "1.23.7",
  });
  const { openNotification } = useNotification();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormInstance>(null);

  const onRememberCredentialsChange = (e: CheckboxChangeEvent) => {
    const { checked } = e.target;
    if (checked) {
      const username = formRef.current?.getFieldValue("username") as string;
      const password = formRef.current?.getFieldValue("password") as string;
      if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      }
      localStorage.setItem("remember", "true");
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.setItem("remember", "false");
    }
    formRef.current?.setFieldsValue({ remember: checked });
  };
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    const remember = localStorage.getItem("remember") === "true";

    if (savedUsername && remember) {
      formRef.current?.setFieldsValue({
        username: savedUsername,
        password: savedPassword,
        remember: true,
      });
    }
  }, []);

  const onFinish = async (
    values: z.infer<typeof loginSchema> & { remember: boolean }
  ) => {
    const { username, remember, password } = values;
    if (remember) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("remember", "true");
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.removeItem("remember");
    }

    try {
      setLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        callbackUrl: `${
          process.env.NEXTAUTH_URL || "http://localhost:3000"
        }/dashboard`,
        username: values.username,
        password: values.password,
      });

      setLoading(false);
      if (!res?.error) {
        try {
          // Added
          await router.push("/dashboard");
        } catch (error) {
          console.error("Failed to redirect to dashboard:", error);
        }
      } else {
        onFinishFailed();
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const onFinishFailed = () => {
    openNotification({
      message: "Credenciales Incorrectas",
      description: "Verifique sus credenciales, recuerde que son precreadas.",
      placement: "topRight",
      type: "error",
    });
  };

  return (
    <div
      className={` ${literata.className} flex h-screen  items-center  bg-[#faf1eb] `}
    >
      <AppHead title="Login" />
      <div className="fixed bottom-0 right-0 z-10 p-2  text-sm text-slate-600">
        <h1 className="font-mono ">{version.data?.currentVersion}</h1>
      </div>

      <Link
        href="/"
        className="fixed right-3 top-3 z-10 flex items-center justify-center text-sm hover:opacity-60  "
      >
        <HiOutlineArrowLeft className="mr-2" />
        Ir Atrás
      </Link>
      {/* //
      "url(https://img.freepik.com/free-photo/traffic-vehicle-urban-reflections-city_1112-973.jpg?size=626&ext=jpg&ga=GA1.1.631442079.1696688262&semt=sph)", */}
      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1432531/pexels-photo-1432531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right",
          position: "relative",
          width: "50%",
          height: "100%",
        }}
      >
        <div
          style={{
            content: "Exaya",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.4)",
          }}
        />
        <div className="animate__animated animate__flipInX relative m-5 flex items-center gap-1">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
            width={50}
            height={50}
            title="Exaya"
            alt="logo"
            priority
          />
          <h2
            className={`  bg-white bg-clip-text text-left text-3xl text-transparent   ${blackOpsOne.className} `}
          >
            Exaya
          </h2>
          <h5>
            <span className="text-orange-400">|</span> Sistema Web de Gestión
            Operativa <span className="text-orange-400">|</span>
          </h5>
        </div>
        <h5 className="absolute bottom-5 left-5 text-sm  text-slate-200 ">
          Desarrollado por{" "}
          <Link
            href="https://twitter.com/joanpaucar_"
            target="_blank"
            rel="noopener noreferrer"
            className="  text-orange-400 hover:text-orange-500"
          >
            @BrayanPaucar
          </Link>
        </h5>
      </div>

      <div
        style={{
          backgroundImage: `url(${LoginGradient.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backdropFilter: "blur(10px)",
          position: "relative",
          width: "50%",
          height: "100%",
        }}
        className={` ${literata.className} flex w-1/2 flex-col items-center justify-center pl-5`}
      >
        <h3
          className={`  font- bg-gradient-to-l  from-black to-orange-500 bg-clip-text text-left  text-4xl text-transparent   `}
        >
          Inicio de Sesión
        </h3>
        <div className="mb-10 text-center">
          <h4 className=" mt-2">
            Las credenciales son precreadas, solicítalas en el área de TI
          </h4>
        </div>

        <AOSWrapper>
          <Form
            data-aos="fade-in"
            data-aos-duration="500"
            initialValues={{ remember: true }}
            autoComplete="on"
            className={`${literata.className} w-[430px] drop-shadow-md `}
            ref={formRef}
            name="control-ref"
            onFinish={
              onFinish as unknown as (
                values: z.infer<typeof loginSchema>
              ) => void
            }
            onFinishFailed={onFinishFailed}
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
                className={`rounded-lg px-5 py-2  ring-2 ring-orange-300   ${literata.className}`}
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
                className={`rounded-lg px-5 py-2  ring-2 ring-orange-300   ${literata.className}`}
                type="password"
              />
            </Form.Item>
            <div className="flex flex-col gap-14">
              <Checkbox
                className={literata.className}
                onChange={onRememberCredentialsChange}
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
          <div className="flex gap-2 p-4 text-xs text-slate-500">
            <p className="flex items-center gap-2 font-mono ">
              <HiOutlineUser /> <span>albert</span>
            </p>{" "}
            |
            <p className="flex items-center gap-2 font-mono">
              <GoKey /> <span>albert-exaya</span>
            </p>
          </div>
        </AOSWrapper>
      </div>
    </div>
  );
}
