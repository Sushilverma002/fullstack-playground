import React from "react";
import { useEffect, useState } from "react";

//funcitonal based / functional programning.
function LearningOfUseEffect() {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  function handleOnchange(event) {
    setText(event.target.value);
    console.log(event.target.value);
  }

  //1 type :infinty time run : on every render
  //   useEffect(() => {
  //     console.log("Rendering into the UseEffect.");
  //   });

  //2. only one time render , dependency list->[]

  //   useEffect(() => {
  //     console.log("Rendering into the UseEffect.");
  //   }, []);

  // 3: on the basis of some props and state value:
  // first render+ on the basis of some dependency of value xyz.

  //   useEffect(() => {
  //     console.log("Rendering into the Useeffect");
  //   }, [value]);

  // 4 . on the basis of some event

  useEffect(() => {
    console.log("listener added");
    return () => {
      console.log("listener removal");
    };
  }, [text]); // dependency list

  return (
    <div>
      <input
        className="input-tag"
        type="text"
        onChange={handleOnchange}
        placeholder="Please type"
      ></input>
    </div>
  );
}

// class based
// CRUD operations .
/*

life cycle method
mount-> DOM render hota ya phir ho chuka hai .
unmount-> Remove karta hu DOM / Removed ho chuka hai .
mount = componentdidMount
unmount = componentsWillUnmount
update= componendidUpdate

*/
export default LearningOfUseEffect;
