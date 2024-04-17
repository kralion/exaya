import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

type ChildrenP = {
  children: React.ReactNode;
};

export default function AOSWrapper({ children }: ChildrenP) {
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return <>{children}</>;
}
