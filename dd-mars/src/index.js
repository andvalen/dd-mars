import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import * as _ from "lodash";

function spice(e) {
  [1, 0.9, 0.8, 0.5, 0.1].forEach(function (i) {
    var j = (1 - i) * 50;
    var elem = document.createElement("div");
    var size = Math.ceil(Math.random() * 10 * i) + "px";
    elem.style.position = "fixed";
    elem.style.top =
      25 + e.pageY + Math.round(Math.random() * j - j / 2) + "px";
    elem.style.left =
      25 + e.pageX + Math.round(Math.random() * j - j / 2) + "px";
    elem.style.width = size;
    elem.style.height = size;
    elem.style.background =
      "hsla(" +
      Math.round(Math.random() * 360) +
      ", " +
      "100%, " +
      "50%, " +
      i +
      ")";
    elem.style.borderRadius = size;
    elem.style.pointerEvents = "none";
    document.body.appendChild(elem);
    window.setTimeout(function () {
      document.body.removeChild(elem);
    }, Math.round(Math.random() * i * 500));
  });
}

var throttleMeSenpai = _.throttle(spice, 10);

window.addEventListener(
  "mousemove",
  (e) => {
    throttleMeSenpai(e);
  },
  false
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
