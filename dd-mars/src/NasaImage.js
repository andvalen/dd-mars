import { useEffect, useState } from "react";
import "./App.css";
import MuskSpinner from "./MuskSpinner";

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const getRandomDate = () => {
  const start = new Date("2014-01-01").getTime();
  const end = new Date("2021-01-01").getTime();

  const range = start - end;

  const r = Math.floor(range * Math.random());

  return formatDate(new Date(start + r));
};

function NasaImage({ onImageSelected }) {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const data = await fetch(
      "https://api.nasa.gov/planetary/apod" +
        "?api_key=BmJk1VkfUuy8AYtbejScKfSfrOvBK01K2d5OWT3E" +
        `&date=${getRandomDate()}`
    );

    const body = await data.json();

    onImageSelected(body);

    setData(body);
  }, []);

  return (
    <div style={{ minHeight: 150 }}>
      {!data && <MuskSpinner />}
      {!!data && (
        <img
          title={data.title}
          onClick={() => {
            onImageSelected(data);
          }}
          src={data.url}
          style={{
            maxWidth: "100%",
            width: 300,
            marginBottom: 10,
            cursor: "pointer",
          }}
        />
      )}
    </div>
  );
}

export default NasaImage;
