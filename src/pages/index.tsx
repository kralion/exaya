import React from "react";
import { Inter, Black_Ops_One } from "next/font/google";
import Image from "next/image";
import LandingBanner from "@/assets/landing-banner.png";
import LandingBanner2 from "@/assets/landing-banner-2.png";
import Link from "next/link";
import { RightCircleOutlined } from "@ant-design/icons";
const inter = Inter({
  weight: ["800", "300"],
  subsets: ["latin-ext"],
  preload: true,
});
const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});
export default function Index() {
  return (
    <>
      <div className="m-5 flex justify-between">
        <div className=" flex items-center justify-start">
          <Image
            src="https://img.icons8.com/?size=512&id=0jE7hnKV3NQW&format=png"
            width={30}
            height={30}
            title="Exaya"
            className="animate__animated animate__flip"
            alt="logo"
          />
          <h3
            className={`  text-left text-2xl  leading-none text-[#231335]   ${blackOpsOne.className} `}
          >
            Exaya
          </h3>
        </div>
        <Link
          href="/login"
          className={` items-center rounded-full border-2 border-purple-900   bg-purple-800 px-4 py-1 text-sm text-white shadow-xl duration-200 hover:bg-purple-900 active:bg-purple-950  ${inter.className}`}
        >
          Get Started
        </Link>
      </div>
      <div
        className={`${inter.className} m-10 flex h-screen flex-col items-center justify-center text-center`}
      >
        <div className="relative m-5 space-y-12   rounded-2xl border-1 border-slate-500 bg-zinc-100 px-7 py-16">
          <div className="space-y-3.5">
            <h1 className="text-7xl font-bold">
              Unleash And Transform Your Bussines Potential
            </h1>
            <h5 className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quos voluptates voluptatem quod
            </h5>
          </div>
          <div>
            <Link
              href="/login"
              className={` items-center rounded-full bg-gradient-to-l from-rose-900 via-purple-900 to-purple-900 px-10 py-5 text-xl text-white shadow-xl  hover:bg-purple-950  ${inter.className}`}
            >
              <RightCircleOutlined twoToneColor={"red"} className="mr-2" />
              Get Started
            </Link>
          </div>
          <div className="flex justify-center gap-7">
            <Image
              src={LandingBanner}
              alt="Picture of the author"
              className=" rounded-2xl drop-shadow-xl duration-300 hover:scale-105"
              width={500}
              height={500}
            />
            <Image
              src={LandingBanner2}
              alt="Picture of the author"
              className="rounded-2xl drop-shadow-xl duration-300 hover:scale-105"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
