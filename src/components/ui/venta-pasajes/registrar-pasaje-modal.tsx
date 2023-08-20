import React, { useState } from "react";
import { Modal } from "antd";
import style from "./frame.module.css";
import { Concert_One } from "next/font/google";
import Image from "next/image";
import busPreview from "@/assets/bus-preview.png";
import { Title } from "@mantine/core";

const concertOne = Concert_One({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

const seats = Array.from({ length: 50 }, (_, i) => i + 1);

export const RegistrarPasajeModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleSeatClick = (seatNumber: number) => {
    console.log(seatNumber);
  };

  return (
    <div>
      <button className={style.button} onClick={() => setOpen(true)}>
        <span className="px-3.5"> Registrar</span>
      </button>
      <Modal
        title="Registro de Asientos"
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={null}
      >
        <div className="flex items-start justify-center  gap-7">
          <div className=" mt-10 grid w-1/3 grid-flow-row grid-cols-4 ">
            {seats.map((seatNumber) => (
              <svg
                key={seatNumber}
                className="my-2 transform cursor-pointer  transition-all duration-100 hover:scale-105 active:scale-125 "
                onClick={() => handleSeatClick(seatNumber)}
                width="50"
                height="50"
                viewBox="0 0 24 22"
              >
                {/* Inserta el SVG del asiento aquí */}
                <path
                  className="fill-slate-100 stroke-black "
                  d="M7.38,15a1,1,0,0,1,.9.55A2.61,2.61,0,0,0,10.62,17h2.94a2.61,2.61,0,0,0,2.34-1.45,1,1,0,0,1,.9-.55h1.62L19,8.68a1,1,0,0,0-.55-1L17.06,7l-.81-3.24a1,1,0,0,0-1-.76H8.72a1,1,0,0,0-1,.76L6.94,7l-1.39.69a1,1,0,0,0-.55,1L5.58,15Z"
                ></path>
                <path
                  className="fill-amber-200 stroke-amber-600"
                  d="M16.8,15H19a1,1,0,0,1,1,1.16l-.53,3.17a2,2,0,0,1-2,1.67h-11a2,2,0,0,1-2-1.67L4,16.16A1,1,0,0,1,5,15H7.38a1,1,0,0,1,.9.55h0A2.61,2.61,0,0,0,10.62,17h2.94a2.61,2.61,0,0,0,2.34-1.45h0A1,1,0,0,1,16.8,15Z"
                ></path>
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy=".3em"
                  fontSize="6"
                  className={`text-[8px] font-bold text-red-500 dark:text-white  ${concertOne.className}`}
                >
                  {seatNumber}
                </text>
              </svg>
            ))}
          </div>
          <div className="space-y-3.5">
            <Title className="text-center text-slate-400" order={5}>
              Vista previa del Bus
            </Title>
            <Image
              src={busPreview}
              width={500}
              height={500}
              alt="bus-preview"
            />
            <Title className="text-center text-slate-400" order={5}>
              Parte Delantera
            </Title>
            <Image src="" width={500} height={500} alt="front-preview-bus" />
          </div>
        </div>
      </Modal>
    </div>
  );
};
