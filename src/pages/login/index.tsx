"use client";
import type { loginSchema } from "@/schemas";
import { Checkbox, Form } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { FormInstance } from "antd/es/form";
import { useSession } from "next-auth/react";
import { Black_Ops_One, Literata } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
import type { z } from "zod";
import "animate.css";
import AOSWrapper from "@/utils/AOS";
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

  const onFinish = (values: z.infer<typeof loginSchema>) => {
    // TODO: Remove this when the API is ready
    // const res = await fetch("/api/auth/callback/credentials", {
    //   method: "POST",
    //   body: JSON.stringify(values),
    //   headers: { "Content-Type": "application/json" },
    // });
    // if (res.ok) {
    //   const data = await res.json();
    //   console.log(data);
    // }
    if (values.username === "admin" && values.password === "admin") {
      window.location.replace("/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const formRef = useRef<FormInstance>(null);
  return (
    <div
      className={` ${literata.className} flex h-screen  items-center  bg-[#faf1eb] `}
    >
      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3353612/pexels-photo-3353612.jpeg?auto=compress&cs=tinysrgb&w=600)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: " center",

          position: "relative",
          width: "50%",
          height: "100%",
        }}
      >
        <div
          style={{
            content: "",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.6)",
          }}
        />
        <div className="animate__animated animate__flipInX animate__delay-1s justify-st m-7 flex items-center gap-1">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
            width={50}
            height={50}
            title="Exaya"
            alt="logo"
          />
          <h3
            className={`  bg-white bg-clip-text text-left text-4xl leading-none text-transparent   ${blackOpsOne.className} `}
          >
            Exaya
          </h3>
          <h5>
            <span className="text-orange-400">|</span> Sistema Web de Gestión
            Operativa <span className="text-orange-400">|</span>
          </h5>
        </div>
      </div>

      <div className="flex w-1/2 flex-col items-center pl-5">
        <h3
          className={`  bg-gradient-to-r from-black  to-orange-500 bg-clip-text text-left text-4xl leading-none text-transparent   ${blackOpsOne.className} `}
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
            data-aos="fade-up"
            data-aos-duration="500"
            initialValues={{ remember: true }}
            autoComplete="on"
            className={`${literata.className} w-[510px] drop-shadow-md `}
            ref={formRef}
            name="control-ref"
            onFinish={
              onFinish as unknown as (
                values: z.infer<typeof loginSchema>
              ) => void
            }
          >
            <h3 className="mb-2  font-semibold">Usuario</h3>
            <Form.Item
              name="username"
              className={`${literata.className} `}
              rules={[
                {
                  required: true,
                  message: "*Este campo es obligatorio",
                },
              ]}
            >
              <input
                className={`w-full rounded-lg px-5 py-2  ring-1 ring-orange-300   ${literata.className}`}
                type="text"
              />
            </Form.Item>

            <h4 className="mb-2  font-black">Contraseña</h4>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "*Escriba su contraseña",
                },
              ]}
            >
              <input
                className={`w-full rounded-lg px-5 py-2  ring-1 ring-orange-300   ${literata.className}`}
                type="password"
              />
            </Form.Item>
            <Checkbox className={`${literata.className}  `} onChange={onChange}>
              Recordar contraseña
            </Checkbox>
            <button
              type="submit"
              className=" mt-14 flex w-full items-center justify-center gap-3.5 rounded-lg border-2 border-orange-600 border-opacity-40 bg-orange-500  py-2 tracking-wide text-white    active:opacity-70"
            >
              Ingresar
            </button>
          </Form>
        </AOSWrapper>
      </div>
    </div>
  );
}
