import React, { useState } from "react";
import "../src/App.css";
import CompletedTask from "./components/completed";
import InputBox from "./components/input-box";
import Pending from "./components/pending";

function TodoApp() {
  const [listItem, setListItem] = useState([]);
  const [completeItem, setCompleteItem] = useState([]);

  const onAdd = (item) => {
    if (item) {
      setListItem((prevList) => {
        return [...prevList, item];
      });
    }
  };

  const deleteItem = (i) => {
    const newList = listItem.filter((elem, id) => {
      return i !== id;
    });
    setListItem(newList);
  };

  const removeAll = () => {
    setListItem([]);
  };

  const onCompleteTask = (i) => {
    let completeThis = listItem[i];
    setCompleteItem((prev) => [...prev, completeThis]);
    deleteItem(i);
  };

  const delComptask = (i) => {
    const newCompList = completeItem.filter((elem, id) => {
      return i !== id;
    });
    setCompleteItem(newCompList);
  };

  return (
    <div>
      <InputBox onAdd={onAdd} />
      <div className="main">
        <Pending
          onDelete={deleteItem}
          listItem={listItem}
          removeAll={removeAll}
          onCompleteTask={onCompleteTask}
        />
        <CompletedTask completeItem={completeItem} delComptask={delComptask} />
      </div>
    </div>
  );
}

export default TodoApp;
