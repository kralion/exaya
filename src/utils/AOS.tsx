import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

type ChildrenP = {
  children: React.ReactNode;
};

function AOSWrapper({ children }: ChildrenP) {
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    // window.addEventListener("scroll", AOS.refresh())
    return () => {
      // window.removeEventListener("scroll", AOS.refresh());
    };
  }, []);

  return <>{children}</>;
}

export default AOSWrapper;
