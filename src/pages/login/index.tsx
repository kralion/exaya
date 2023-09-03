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

  const onFinish = async (values: z.infer<typeof loginSchema>) => {
    const res = await fetch("/api/auth/callback/credentials", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    }
    console.log("Received values of form: ", values);
  };

  const formRef = useRef<FormInstance>(null);
  return (
    <div
      data-aos="flip-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      className={` ${literata.className} flex h-screen flex-col items-center justify-center bg-[#FFFEF7] `}
    >
      <div className="mb-10 text-center">
        <div className="animate__animated animate__flip flex items-center justify-center gap-1">
          <Image
            src="https://img.icons8.com/?size=512&id=0jE7hnKV3NQW&format=png"
            width={50}
            height={50}
            title="Exaya"
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
      <Form
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
          className="hover:bg-purple-950 mt-14 flex w-full items-center justify-center gap-3.5 rounded-md bg-[#3d215e] p-3 text-white  duration-200 hover:bg-[#231335] active:scale-110"
        >
          Ingresar
        </button>
      </Form>
    </div>
  );
}
