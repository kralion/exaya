"use client";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import Link from "next/link";
import { useState, useRef } from "react";

type NavigationProps = {
  navLinks: {
    label: string;
    href: string;
  }[];
};

export default function DesktopNavBar({ navLinks }: NavigationProps) {
  const [bubbleStyle, setBubbleStyle] = useState({});
  const navRef = useRef(null);
  return (
    <div className="  my-3 hidden   items-center justify-center gap-2 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 p-1 backdrop-blur-md lg:inline-flex  ">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className=" flex items-center justify-center rounded-full bg-white p-1  active:bg-orange-100 "
      >
        <MdOutlineKeyboardDoubleArrowUp size={25} className="text-black" />
      </button>
      <nav ref={navRef} className="position-relative group flex">
        {navLinks.map((link, index) => (
          <Link
            onMouseEnter={(e) => {
              const linkRect = e.target.getBoundingClientRect();
              const navRect = navRef.current.getBoundingClientRect();
              const bubbleStyle = {
                left: linkRect.left - navRect.left + 45,
                top: linkRect.top - navRect.top + 3.5,
                width: linkRect.width,
                height: linkRect.height,
                transition: "left 0.3s, top 0.3s, width 0.3s, height 0.3s",
              };
              setBubbleStyle(bubbleStyle);
            }}
            onClick={(e) => {
              const linkRect = e.target.getBoundingClientRect();
              const navRect = navRef.current.getBoundingClientRect();
              const bubbleStyle = {
                left: linkRect.left - navRect.left + 45,
                top: linkRect.top - navRect.top + 3.5,
                width: linkRect.width,
                height: linkRect.height,
                transition: "left 0.3s, top 0.3s, width 0.3s, height 0.3s",
              };
              setBubbleStyle(bubbleStyle);
            }}
            className="z-10 flex items-center justify-center rounded-full p-2 text-sm   text-white duration-300  active:text-black active:opacity-70"
            href={link.href}
            key={index}
          >
            {link.label}
          </Link>
        ))}
        <div
          style={bubbleStyle}
          className="absolute rounded-full bg-gradient-to-bl from-orange-500 to-rose-500 opacity-0 transition-all group-hover:opacity-100 "
        ></div>
      </nav>
    </div>
  );
}
