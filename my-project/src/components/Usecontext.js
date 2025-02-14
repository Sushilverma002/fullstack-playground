import React, { createContext, useContext, useState } from "react";

function Usecontext() {
  const MyContext = createContext();

  function MyProvider({ children }) {
    const [message] = useState("Hello, Context!");
    let [message2] = useState("hello i am another child component");

    const contextValue = [message, message2];
    return (
      <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
    );
  }

  function DisplayMessage() {
    const message = useContext(MyContext);
    return <p>The message is: {message}</p>;
  }
  function AnotherComponent() {
    const message2 = useContext(MyContext);
    return <p>{message2}</p>;
  }

  return (
    <MyProvider>
      <DisplayMessage />
      <AnotherComponent />
    </MyProvider>
  );
}

export default Usecontext;
