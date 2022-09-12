import React from "react";
import "./Task.css"

function Task() {

    return (
        <div className="task"> 
            <div className="task__text-container">
                <input  className="task__check" type="checkbox"/>
                <span className="checkbox__slider"></span>
                <p className="task__text">Make a timetable</p>
            </div>
            <div className="task__button-container">
                <button className="task__button" type="submit"></button>
                <button className="task__button" type="submit"></button>
                <button className="task__button" type="submit"></button>
            </div>
        </div>
    );
}

export default Task;


