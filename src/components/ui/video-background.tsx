import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Black_Ops_One } from "next/font/google";

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
});

export default function VideoBackground() {
  return (
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
  );
}
