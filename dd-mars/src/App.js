import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(async () => {
    const data = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=BmJk1VkfUuy8AYtbejScKfSfrOvBK01K2d5OWT3E`
    );

    setData(data);
  }, []);

  return (
    <div className="App">
      <header className="App-header">{JSON.stringify(data, null, 2)}</header>
    </div>
  );
}

export default App;
