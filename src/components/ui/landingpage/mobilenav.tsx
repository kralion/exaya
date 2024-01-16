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

export default function MobileNavBar({ navLinks }: NavigationProps) {
  const [bubbleStyle, setBubbleStyle] = useState({});
  const navRef: React.RefObject<HTMLElement> = useRef<HTMLElement>(null);
  return (
    <div className="fixed bottom-3 z-10 mx-3 flex items-center   justify-center gap-2 rounded-full bg-orange-600/70 p-1 backdrop-blur-md lg:hidden  ">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className=" flex items-center justify-center rounded-full bg-white p-1  active:bg-orange-100 "
      >
        <MdOutlineKeyboardDoubleArrowUp size={20} className="text-black" />
      </button>
      <nav ref={navRef} className="position-relative group flex">
        {navLinks.map((link, index) => (
          <Link
            onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
              const target = e.target as HTMLElement;
              const linkRect = target.getBoundingClientRect();
              if (navRef.current) {
                const navRect = navRef.current.getBoundingClientRect();
                const bubbleStyle = {
                  left: linkRect.left - navRect.left + 45,
                  top: linkRect.top - navRect.top + 3.5,
                  width: linkRect.width,
                  height: linkRect.height,
                  transition: "left 0.3s, top 0.3s, width 0.3s, height 0.3s",
                };
                setBubbleStyle(bubbleStyle);
              }
            }}
            onMouseLeave={() => {
              setBubbleStyle({});
            }}
            className="z-10 flex items-center justify-center rounded-full p-2 text-xs text-white duration-300   active:text-black active:opacity-70"
            href={link.href}
            key={index}
          >
            {link.label}
          </Link>
        ))}
        <div
          style={bubbleStyle}
          className="absolute rounded-full bg-gradient-to-bl from-orange-600 to-rose-600 opacity-0 transition-all group-hover:opacity-100 "
        ></div>
      </nav>
    </div>
  );
}
