import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";

function App() {

  return (
    <>
      <Navbar />
      <Textbox heading='Text Manipulator'/>
    </>
  );
}

export default App;
