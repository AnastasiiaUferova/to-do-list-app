import React from "react";
import "./Task.css"

function Task({task}) {

    return (
        <div className="task"> 
            <div className="task__text-container">
                <input  className="task__check" type="checkbox"/>
                <span className="checkbox__slider"></span>
                <p className="task__text">{task.body}</p>
            </div>
            <div className="task__button-container">
                <button className="task__button" type="submit"></button>
                <button className="task__button" type="submit"></button>
                <button className="task__button" type="submit"></button>
            <form name="selection"></form>
                <select className="task-form__selection">
	                <option>1p</option>
	                <option>2p</option>
	                <option>3p</option>
                </select>
            </div>
        </div>
    );
}

export default Task;


