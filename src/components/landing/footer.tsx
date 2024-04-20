import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsTwitterX, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className=" body-font bg-zinc-100 px-10 py-20 dark:bg-zinc-950 dark:text-white  lg:p-10">
      <div className="container  mx-auto flex flex-col items-center sm:flex-row">
        <a className="flex items-center gap-2">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
            //40 mobile
            width={30}
            height={30}
            className=" drop-shadow-xl"
            alt="logo"
            priority
          />
          <span className="font-montserrat text-xl font-bold">Exaya</span>
        </a>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          © 2024 Exaya —
          <Link
            href="https://twitter.com/brayanpaucar_"
            className="ml-1 text-gray-600 hover:opacity-70 dark:text-zinc-400"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Brayan Paucar
          </Link>
        </p>
        <span className="mt-4  flex items-center justify-center gap-3 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href="https://twitter.com/brayanpaucar_"
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer hover:opacity-60"
          >
            <BsTwitterX width={30} height={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/brayanpaucar"
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer hover:opacity-60"
          >
            <BsLinkedin width={30} height={30} />
          </a>
          <a
            href="https://github.com/kralion"
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer hover:opacity-60"
          >
            <BsGithub width={30} height={30} />
          </a>
        </span>
      </div>
    </footer>
  );
}
