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
    <video
      autoPlay
      muted
      loop
      style={{
        background: "rgba(0, 0, 0, 0.4)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        position: "relative",
        height: "100vh",
        width: "auto",
      }}
    >
      <source
        src="https://cdn.pixabay.com/vimeo/793525208/highway-148077.mp4?width=360&hash=a02b09d7f10f658d41f99ac61c7055ec2405590c"
        type="video/mp4"
      />

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

      <div
        // Create a container for the logo and text
        className="animate__animated animate__flipInX relative m-5 flex items-center gap-1"
      >
        <Image
          // Render the image of the logo
          src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
          width={50}
          height={50}
          title="Exaya"
          alt="logo"
          priority
        />
        <h2
          // Display the name "Exaya" in a semi-transparent text
          className={`bg-white bg-clip-text text-left text-3xl text-transparent ${blackOpsOne.className}`}
        >
          Exaya
        </h2>
        <h5>
          <span className="text-orange-400">|</span> Sistema Web de Gestión
          Operativa <span className="text-orange-400">|</span>
        </h5>
      </div>
      <h5 className="absolute bottom-5 left-5 text-sm  text-slate-200 ">
        Developed by{" "}
        <Link
          href="https://twitter.com/brayanpaucar_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 hover:text-orange-500"
        >
          @BrayanPaucar
        </Link>
      </h5>
    </video>
  );
}
