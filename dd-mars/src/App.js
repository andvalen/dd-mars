import { useState } from "react";
import "./App.css";
import NasaImageList from "./NasaImageList";

function App() {
  const [mainImage, setMainImage] = useState(null);

  const onImageSelected = (body) => {
    setMainImage(body);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "stretch",
        width: "100%",
        padding: 10,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          flexBasis: "100%",
          flexShrink: 1,
          marginRight: 10,
          border: `1px solid black`,
          background: "lightgray",
          padding: 10,
          borderRadius: 3,
          minHeight: 300,
        }}
      >
        {!!mainImage && (
          <>
            <h2>{mainImage.title}</h2>
            <img src={mainImage.hdurl} style={{ maxWidth: "100%" }} />
            <div>{mainImage.explanation}</div>
          </>
        )}
      </div>

      <NasaImageList onImageSelected={onImageSelected} />
    </div>
  );
}

export default App;
