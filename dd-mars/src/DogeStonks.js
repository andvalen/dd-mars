import { useEffect } from "react";
import "./App.css";

function DogeStonks() {
  useEffect(async () => {
    const script = document.createElement("script");
    script.src = "https://widget.nomics.com/embed.js";
    script.id = "stooonks";
    document.body.appendChild(script);
    script.onload = () => {};
  }, []);

  return (
    <div style={{ minHeight: 150, minWidth: "100%" }}>
      <div
        class="nomics-ticker-widget"
        data-name="Dogecoin"
        data-base="DOGE"
        data-quote="USD"
      ></div>
    </div>
  );
}

export default DogeStonks;
