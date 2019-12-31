import React from "react";
import ReactDOM from "react-dom";
import "styles.css";

const {
  AudioPlayer
} = require("@shift-marketplace/audio-player-demo/dist/cjs/index.cjs.js");

function App() {
  return (
    <React.Fragment>
      <AudioPlayer />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
