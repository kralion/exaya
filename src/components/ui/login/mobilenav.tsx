"use client";
import { clsx } from "clsx";
import { BiChevronUp } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";
const items = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Planes",
    href: "/planes",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },

  {
    label: "Ingresar",
    href: "/login",
  },
];

export default function MobileNavBar() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-3 z-10 mx-3 flex  h-16 items-center justify-center gap-2 rounded-full bg-black/70 p-2 backdrop-blur-md ">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className=" flex items-center justify-center rounded-full bg-white p-2.5  active:bg-orange-100 "
      >
        <BiChevronUp size={30} className=" text-2xl text-black" />
      </button>
      <div className="flex gap-5 px-3">
        {items.map((item, index) => {
          return (
            <Link
              className={clsx(
                "text-lg text-white duration-300 hover:text-[#ff5e00]",
                pathname === item.href && "text-[#ff5e00]"
              )}
              href={item.href}
              key={index}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
