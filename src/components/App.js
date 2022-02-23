import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

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
          setList((list) => [...list, value]);
          setValue("");
        }}
      >
        {" "}
        Add
      </button>
      <div>
        {list.map((ele, index) => (
          <>
            <div className="list">{ele}</div>
            <button>delet</button>
            <button>edit</button>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
