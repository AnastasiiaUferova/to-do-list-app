import React from "react";
import "./Task.css";
import {useRef, useState} from 'react';

function Task({task}) {
    const ref = useRef(null);
    const [isChecked, setIsChecked] = useState(false);
    

    const handleClick = () => {
        if (ref.current.checked) {
            setIsChecked(true)
        } else {
            setIsChecked(false)
        }
    };

    return (
        <div className="task"> 
            <div className="task__text-container">
                <input ref={ref}  className="task__check" type="checkbox" onClick={handleClick}/>
                <span className="checkbox__slider"></span>
                <p   className={
                                isChecked 
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


