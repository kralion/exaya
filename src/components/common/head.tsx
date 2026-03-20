import { useEffect } from "react";

type Props = {
  title: string;
};

export default function AppHead({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <meta name="description" content="Desarrollado por Brayan Joan" />
      <link
        rel="icon"
        href="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
      />
    </>
  );
}
