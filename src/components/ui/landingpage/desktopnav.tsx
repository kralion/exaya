"use client";
import Link from "next/link";
import { useRef, useState } from "react";

type NavigationProps = {
  navLinks: {
    label: string;
    href: string;
  }[];
};

export default function DesktopNavBar({ navLinks }: NavigationProps) {
  const [bubbleStyle, setBubbleStyle] = useState({});
  const navRef: React.RefObject<HTMLElement> = useRef<HTMLElement>(null);
  return (
    <div className="  my-3 hidden   items-center justify-center gap-2 rounded-full border border-orange-400/50 bg-gradient-to-b from-orange-400  to-orange-600 p-1 shadow-md backdrop-blur-sm lg:inline-flex  ">
      <nav ref={navRef} className="position-relative group flex">
        {navLinks.map((link, index) => (
          <Link
            onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
              const target = e.target as HTMLElement;
              const linkRect = target.getBoundingClientRect();
              if (navRef.current) {
                const navRect = navRef.current.getBoundingClientRect();
                const bubbleStyle = {
                  left: linkRect.left - navRect.left + 3.5,
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
            className="z-10 flex items-center justify-center rounded-full p-2 text-xs   text-white duration-300   active:opacity-70"
            href={link.href}
            key={index}
          >
            {link.label}
          </Link>
        ))}
        <div
          style={bubbleStyle}
          className="absolute rounded-full bg-gradient-to-bl from-black/90 to-black/70 opacity-0 transition-all group-hover:opacity-100 "
        ></div>
      </nav>
    </div>
  );
}
