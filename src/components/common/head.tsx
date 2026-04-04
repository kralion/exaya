import { useEffect } from "react";

type Props = {
  title: string;
};

/** Sets `document.title`; global meta/links live on the root route (`src/routes/__root.tsx`). */
export default function AppHead({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
}
