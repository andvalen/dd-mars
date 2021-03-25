import { useEffect, useState } from "react";
import "./App.css";
import NasaImage from "./NasaImage";

let _id = 1;
const idCounter = () => ++_id;

function NasaImageList() {
  const [components, setComponents] = useState([]);

  return (
    <div
      style={{
        width: 400,
      }}
    >
      <pre>
        <span
          onClick={() => {
            setComponents([
              ...components,
              <NasaImage key={`NasaImage${idCounter()}`} />,
            ]);
          }}
          style={{
            fontSize: 24,
            background: "green",
            color: "white",
            width: 32,
            height: 32,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
            cursor: "pointer",
          }}
        >
          +
        </span>

        {components}
      </pre>
    </div>
  );
}

export default NasaImageList;
