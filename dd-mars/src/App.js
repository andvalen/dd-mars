import "./App.css";
import NasaImageList from "./NasaImageList";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "stretch",
        width: "100%",
      }}
    >
      <div style={{ flexBasis: "100%", flexShrink: 1 }}></div>

      <NasaImageList />
    </div>
  );
}

export default App;
