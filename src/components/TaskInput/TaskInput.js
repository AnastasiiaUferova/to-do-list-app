import React from "react";
import "./TaskInput.css"

function TaskInput() {

    return (
        <div className="task-input"> 
            <div className="task-input__container">
                <form className="task-input__container-form" >
                    <input  className="task-input__input" placeholder="Create a new todo..." type="text"></input>
                    <button className="task-input__button" type="submit"></button>
                </form>
            </div>
        </div>
    );
}

export default TaskInput;
