import React, { useState } from "react";
import Todoitems from "./Todoitems";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function changeHandler(event) {
   // console.log(event.key);
    if(event.key === 'Enter'){
      addItem();

    }else{
    const newValue = event.target.value;
    setInputText(newValue);
  //  console.log(inputText);
    }
  }

  function onEnter(event) {
    if(event.key === "Enter") addItem();
  }


  function addItem() {
    const trimedtext = inputText.trim();
    if(trimedtext !== "")
    {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={changeHandler} onKeyDown={onEnter}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem, i) => (
            <Todoitems key={i} text={todoitem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
