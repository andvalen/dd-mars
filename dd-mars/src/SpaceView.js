import { useState } from "react";
import NasaImageList from "./NasaImageList";

function SpaceView() {
  const [mainImage, setMainImage] = useState(null);
  const [showAllText, setShowAllText] = useState(false);

  const onImageSelected = (body) => {
    setMainImage(body);
    setShowAllText(false);
  };

  return (
    <div
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
            <div>
              {!!showAllText && <span>{mainImage.explanation}</span>}
              {!showAllText && mainImage.explanation.length > 100 && (
                <>
                  <span>{mainImage.explanation.slice(0, 100).trim()}</span>
                  {"... "}
                  <span
                    onClick={() => {
                      setShowAllText(true);
                    }}
                    style={{ color: "purple" }}
                  >
                    {"vis hele teksten"}
                  </span>
                </>
              )}
            </div>
          </>
        )}
      </div>

      <NasaImageList onImageSelected={onImageSelected} />
    </div>
  );
}

export default SpaceView;
