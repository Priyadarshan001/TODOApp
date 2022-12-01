import React from "react";
import delimg from "../image/deleteicon.png";
import "../App.css";

function CompletedTask(props) {
  return (
    <div className="completedTask">
      <h2>Completed List</h2>
      {props.completeItem !== [] &&
        props.completeItem.map((item, i) => {
          return (
            <p key={i}>
              <div className="data">
                <ol>{item}</ol>
                <div className="delicon">
                  <button onClick={() => props.delComptask(i)}>
                    <img src={delimg} alt="Delete" />
                  </button>
                </div>
              </div>
            </p>
          );
        })}
    </div>
  );
}

export default CompletedTask;
