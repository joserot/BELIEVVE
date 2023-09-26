"use client";

import { useEffect } from "react";

export default function WhatsAppButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/650f269eb1aaa13b7a7885f8/1hb1itmvg";
    script.async = true;
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <></>;
}
