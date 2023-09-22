"use client";

import { useEffect } from "react";

export default function WhatsAppButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/650d9d70b1aaa13b7a785612/1hauiu077";
    script.async = true;
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <></>;
}
