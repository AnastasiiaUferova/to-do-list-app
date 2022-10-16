import React from "react";
import "./Task.css";
import {useRef} from 'react';

function Task({task, checkTask}) {
    const ref = useRef(null);

    const handleClick = () => {
        if (ref.current.checked) {
            checkTask(task.id)
        } else {
            checkTask(task.id)
        }
    };

    return (
        <div className="task"> 
            <div className="task__text-container">
                <input ref={ref}  className="task__check" defaultChecked={task.checked} type="checkbox" onClick={handleClick}/>
                <span className="checkbox__slider"></span>
                <p className={
                                task.checked
                                    ? `task__text task__text_done`
                                    : `task__text `
                                }
                >{task.body}</p>
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


