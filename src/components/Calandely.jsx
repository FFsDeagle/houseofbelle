import React, { useEffect } from "react";

function Calandly() {
  const url = "https://calendly.com/houseofbelle";
  const minWidth = "320px";
  const height = "580px";

  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth, height }}
    />
  );
}

export default Calandly;