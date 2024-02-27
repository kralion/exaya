import Image from "next/image";
import { BsLinkedin, BsTwitterX, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className=" body-font bg-zinc-100 p-10">
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
        <p className="mt-4 text-sm text-zinc-600 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          © 2024 Exaya —
          <a
            href="https://twitter.com/joanpaucar_"
            className="ml-1 text-gray-600 hover:opacity-70"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Brayan Paucar
          </a>
        </p>
        <span className="mt-4 flex items-center justify-center gap-3 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href="https://twitter.com/joanpaucar_"
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer hover:opacity-60"
          >
            <BsTwitterX width={30} height={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/joan-paucar/"
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
