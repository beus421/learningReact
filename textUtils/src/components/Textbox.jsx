import React, { useState } from "react";

function Textbox(props) {
  const [text, changeText] = useState("");
  const [words, changeWords] = useState(0);

  function handleOnChange(e) {
    changeText(e.target.value);
    changeWords(text.split(' ').length)
  }

  function toUpCase() {
    changeText(text.toUpperCase());
  }

  function toLowCase() {
    changeText(text.toLowerCase());
  }
  function toSnakeCase() {
    changeText(text.replaceAll(" ", "_"));
  }
  function toKebabCase() {
    changeText(text.replaceAll(" ", "-"));
  }

  return (
    <>
      <div className="my-3 px-5">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control text-black"
          id="exampleFormControlTextarea1"
          rows="4"
          placeholder="Enter Text Here"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button
          type="button"
          htmlFor="exampleFormControlTextarea1"
          className="py-2 me-3 px-3 border-0 rounded bg-success text-light my-2"
          onClick={toUpCase}
        >
          UpperCase
        </button>
        <button
          type="button"
          htmlFor="exampleFormControlTextarea1"
          className="py-2 me-3 px-3 border-0 rounded bg-success text-light my-2"
          onClick={toLowCase}
        >
          LowerCase
        </button>
        <button
          type="button"
          htmlFor="exampleFormControlTextarea1"
          className="py-2 me-3 px-3 border-0 rounded bg-success text-light my-2"
          onClick={toSnakeCase}
        >
          SnakeCase
        </button>
        <button
          type="button"
          htmlFor="exampleFormControlTextarea1"
          className="py-2 me-3 px-3 border-0 rounded bg-success text-light my-2"
          onClick={toKebabCase}
        >
          KebabCase
        </button>
        <div className="row">
          <span>Words: {words},Characters: {text.length}</span>
          <span>Average reading time: {((text.split(' ').length * 5.16)/60).toFixed(3)} mins</span>
        </div>
      </div>
    </>
  );
}

export default Textbox;
