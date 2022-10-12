import React from "react";
import "./TaskInput.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function TaskInput({onAddTask}) {

    const [content, setContent] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);

    function handleChangeTask(e) {
        setContent(e.target.value);
    }

    const taskText = content.trim();

    function handleSubmit(e) {
        e.preventDefault();

    const task = {
            id: nanoid(),
            body: taskText,
    };

    if (!content) {
        setIsEmpty(true);
        return 
    } else onAddTask(task);
        setContent('');
        setIsEmpty(false);
    }

    return (
        <div className="task-input"> 
            <div className="task-input__container">
                <form className="task-input__container-form" onSubmit={handleSubmit}>
                    <input value={content} onChange={handleChangeTask} className="task-input__input" placeholder="Create a new todo..." type="text"></input>
                    <button className="task-input__button" type="submit"></button>
                </form>
                <ErrorMessage isEmpty={isEmpty} />
            </div>
        </div>
    );
}

export default TaskInput;
