import React from "react";
import delimg from "../image/deleteicon.png";
import compimg from "../image/tasksone.png";
import "../App.css";

function Pending(props) {
  return (
    <div>
      <div>
        <h2>Pending List</h2>
        <ol>
          {props.listItem !== [] &&
            props.listItem.map((data, i) => {
              return (
                <p key={i}>
                  <div className="data">
                    <li>{data}</li>
                    <div className="delicon">
                      <button onClick={() => props.onDelete(i)}>
                        <img src={delimg} alt="Delete" />
                      </button>
                    </div>
                    <div className="comtask">
                      <button onClick={() => props.onCompleteTask(i)}>
                        <img src={compimg} alt="CompTask" />
                      </button>
                    </div>
                  </div>
                </p>
              );
            })}
        </ol>
        {props.listItem.length >= 1 && (
          <button className="remvbtn" onClick={props.removeAll}>
            Remove all
          </button>
        )}
      </div>
    </div>
  );
}

export default Pending;
