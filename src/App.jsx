import { React, useState } from "react";
import { ReactComponent as PatternDividerDesk } from "./images/pattern-divider-desktop.svg";
import { ReactComponent as PatternDividerMob } from "./images/pattern-divider-mobile.svg";
import { ReactComponent as DiceSVG } from "./images/icon-dice.svg";

import "./App.css";

function App() {
  const [advice, setAdvice] = useState(
    "Click the button for some life advice!"
  );
  const [id, setId] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const fetchAdviceHandler = async () => {
    setIsLoading(true);
    setId("...");
    setError(null);
    try {
      const response = await fetch("https://api.adviceslip.com/advice");

      console.log(response);
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      // the response data is in json format
      // use .json() to convert data into a js object
      setIsLoading(false);
      setAdvice(data.slip.advice);
      setId(`Advice #${data.slip.id}`);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };
  let content = '"Click the button for some life advice!"';

  if (error) {
    content = `${error}`;
  }
  if (!error) {
    content = `${advice}`;
  }
  if (isLoading) {
    content = `Loading...`;
  }
  return (
    <main className="App">
      <div className="container">
        <h1 className="advice-number">{id}</h1>
        <p className="advice-text">{content}</p>
        <PatternDividerDesk className="pattern-divider-desk" />
        <PatternDividerMob className="pattern-divider-mob" />

        <button className="button" onClick={fetchAdviceHandler}>
          <DiceSVG className="dice" />
        </button>
      </div>
    </main>
  );
}

export default App;
