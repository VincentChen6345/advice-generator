import { React } from "react";
import { ReactComponent as PatternDividerDesk } from "./images/pattern-divider-desktop.svg";
import { ReactComponent as PatternDividerMob } from "./images/pattern-divider-mobile.svg";
import { ReactComponent as DiceSVG } from "./images/icon-dice.svg";

import "./App.css";

function App() {
  return (
    <main className="App">
      <div className="container">
        <h1 className="advice-number">Advice #117 </h1>
        <p className="advice-text">
          "It's easy to sit up and take notice, what's difficult is getting up
          and taking action"
        </p>
        <PatternDividerDesk className="pattern-divider-desk" />
        <PatternDividerMob className="pattern-divider-mob" />

        <button className="button">
          <DiceSVG className="dice" />
        </button>
      </div>
    </main>
  );
}

export default App;
