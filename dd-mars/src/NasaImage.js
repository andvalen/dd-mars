import { useEffect, useState } from "react";
import "./App.css";

function NasaImage() {
  const [data, setData] = useState({});

  useEffect(async () => {
    const data = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=BmJk1VkfUuy8AYtbejScKfSfrOvBK01K2d5OWT3E`
    );

    const body = await data.json();

    console.log(body);

    setData(body);
  }, []);

  return (
    <div
      style={{
        width: 400,
      }}
    >
      <pre>
        <img src={data?.url} style={{ maxWidth: "100%" }} />
      </pre>
    </div>
  );
}

export default NasaImage;
