import React from "react";
import { Button } from "primereact/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline text-red-600">Hello world!</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button label="Secondary" className="" />
      <Button label="Secondary" className="p-button-raised p-button-secondary" />
    </div>
  );
}

export default App;
