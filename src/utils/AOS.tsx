import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, type ReactNode } from "react";

export default function AOSWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return children;
}
