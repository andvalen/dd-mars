import { useEffect, useState } from "react";
import "./App.css";
import NasaImage from "./NasaImage";

let _id = 1;
const idCounter = () => ++_id;

function NasaImageList({ onImageSelected }) {
  const [components, setComponents] = useState([]);

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        border: `1px solid black`,
        background: "lightgray",
        padding: 10,
        borderRadius: 3,
        minHeight: 200,
        minWidth: 300,
      }}
    >
      <div style={{ marginBottom: 10 }}>
        <span
          onClick={() => {
            setComponents([
              <NasaImage
                key={`NasaImage${idCounter()}`}
                onImageSelected={onImageSelected}
              />,
              ...components,
            ]);
          }}
          style={{
            fontSize: 24,
            background: "purple",
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
      </div>

      {components}
    </div>
  );
}

export default NasaImageList;
