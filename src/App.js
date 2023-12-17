import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather App</h1>

        <Weather />
      </header>
      <footer>
        <div>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/oriana-machado-771014130/">
            Oriana Machado
          </a>{" "}
          and it is{" "}
          <a href="https://github.com/orianamachado66/app-react">
            open sourced
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
