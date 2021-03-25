import DogeStonks from "./DogeStonks";

function MemeView() {
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
      <DogeStonks />
    </div>
  );
}

export default MemeView;
