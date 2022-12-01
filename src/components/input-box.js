import React from "react";
import addIcon from "../image/add-icon.png";
import "../App.css";

function InputBox(props) {
  const [item, setItem] = React.useState("");
  const addItem = () => {
    props.onAdd(item);
    setItem("");
  };
  return (
    <div className="App">
      <h2>Todo List</h2>
      <input
        placeholder="add an item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      ></input>
      <button onClick={addItem}>
        <img src={addIcon} alt="Add" className="icon" />
      </button>
    </div>
  );
}

export default InputBox;
