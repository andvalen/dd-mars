import musk64 from "./musk64";

export default (props) => (
  <img
    src={musk64}
    {...props}
    style={{ animation: "rotation 2s infinite linear", ...(props.style || {}) }}
  />
);
