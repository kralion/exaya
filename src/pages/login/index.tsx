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
    alert(e.target.checked);
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
      className={` ${literata.className} flex h-screen flex-col items-center justify-center bg-[#FFFEF7] `}
    >
      <div className="mb-10 text-center">
        <div className="animate__animated animate__flip flex items-center justify-center gap-1">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
            width={50}
            height={50}
            title="Exaya"
            alt="logo"
          />
          <h3
            className={`  bg-gradient-to-r from-orange-500  to-orange-800 bg-clip-text text-left text-5xl leading-none text-transparent   ${blackOpsOne.className} `}
          >
            Exaya
          </h3>
        </div>

        <h4 className="text-md mt-2">
          Las credenciales son precreadas, solicítalas en el área de TI
        </h4>
      </div>
      <AOSWrapper>
        <Form
          data-aos="fade-up"
          initialValues={{ remember: true }}
          autoComplete="on"
          className={`${literata.className} w-[510px] `}
          ref={formRef}
          name="control-ref"
          onFinish={
            onFinish as unknown as (values: z.infer<typeof loginSchema>) => void
          }
        >
          <h3 className="mb-2  font-semibold">Usuario</h3>
          <Form.Item
            name="username"
            className={`${literata.className} `}
            rules={[
              {
                required: true,
                message: "Por favor ingrese su nombre de usuario",
              },
            ]}
          >
            <input
              className={`w-full  rounded-md border-2 border-[#231335] bg-[#FFFEF7] px-5 py-2 text-xl ${literata.className}`}
              type="text"
            />
          </Form.Item>

          <h4 className="mb-2  font-black">Contraseña</h4>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor ingrese su contraseña",
              },
            ]}
          >
            <input
              className={`w-full  rounded-md border-2 border-[#231335] bg-[#FFFEF7] px-5 py-2 text-xl ${literata.className}`}
              type="password"
            />
          </Form.Item>
          <Checkbox className={`${literata.className}  `} onChange={onChange}>
            Recordar contraseña
          </Checkbox>
          <button
            type="submit"
            className=" mt-14 flex w-full items-center justify-center gap-3.5 rounded-md border-2 border-orange-600 border-opacity-40 bg-orange-500  p-3 tracking-wide text-white shadow-lg  duration-200  active:scale-110"
          >
            Ingresar
          </button>
        </Form>
      </AOSWrapper>
    </div>
  );
}
