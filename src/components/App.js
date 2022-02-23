import React, { useState } from "react";
import "./../styles/App.css";
import List from "./List";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  function delet(id) {
    let newList = list.filter((valu, index) => {
      return index != id;
    });
    setList(newList);
  }
  function edit(id) {
    list.map((ele, index) => {
      if (id === index) {
        setValue(ele);
      }
    });
    delet(id);
  }
  return (
    <div id="main">
      <textarea
        id="task"
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></textarea>
      <button
        id="btn"
        onClick={() => {
          if (value === "") {
          } else {
            setList((list) => [...list, value]);
            setValue("");
          }
        }}
      >
        {" "}
        Add
      </button>
      <div>
        {list.map((ele, index) => (
          <List ele={ele} index={index} delete={delet} edits={edit} />
        ))}
      </div>
    </div>
  );
}

export default App;
