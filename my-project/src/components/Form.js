import { useState } from "react";
import "./Form.css";

function Form() {
  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");

  function onSubmitTheFunction(event) {
    event.preventDefault();
    const obj = {
      title: newTitle,
      date: newDate,
    };

    console.log(obj);
  }
  function onchangeOftheText(event) {
    setTitle(event.target.value);
    // console.log(event.target.value);
  }
  function onchangeOftheDate(event) {
    setDate(event.target.date);

    // console.log(event.target.value);
  }

  return (
    <form className="form-css" onSubmit={onSubmitTheFunction}>
      <div>
        <label>text:</label>
        <input
          type="text"
          value={newTitle}
          onChange={onchangeOftheText}
        ></input>
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          min="2023-05-10"
          max="2030-05-10"
          value={newDate}
          onChange={onchangeOftheDate}
        ></input>
      </div>

      <div>
        <button type="submit">submit this form</button>
      </div>
    </form>
  );
}
export default Form;
