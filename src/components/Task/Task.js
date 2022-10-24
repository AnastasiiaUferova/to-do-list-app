import React from "react";
import "./Task.css";
import {useRef} from 'react';
import { Reorder } from "framer-motion";

function Task({task, checkTask, onDeleteTask, onOpenEditForm, addToImportant}) {
    const checkedRef = useRef(null);
    const importantRef = useRef(null);


    const variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: { 
            opacity: 0,
        }
    }

    const handleCheckClick = () => {
        if (checkedRef.current.checked) {
            checkTask(task.id)
        } else {
            checkTask(task.id)
        }
    };

    const handleImportantClick = () => {

        if (importantRef.current.checked) {
            addToImportant(task.id)
        } else {
            addToImportant(task.id)
        }
    }

    function onSubmitDelete(e) {
        e.preventDefault();
        onDeleteTask(task);
    }

    function handleOpenEditPopup() {
        onOpenEditForm(task)
    }

    return (
        <Reorder.Item className="task" 
        value={task}
        whileDrag={{
            scale: 1.1
        }}
        {...variants}> 
            <div className="task__text-container">
                <input ref={checkedRef}  className="task__check" defaultChecked={task.checked} type="checkbox" onClick={handleCheckClick}/>
                <span className="checkbox__slider"></span>
                <p className={
                                task.checked
                                    ? `task__text task__text_done`
                                    : `task__text`
                                }
                >{task.body}</p>
            </div>
            <div className="task__button-container">
                <input ref={importantRef}  defaultChecked={task.important} className="task__check_important"  type="checkbox" onClick={handleImportantClick}/>
                <button className="task__button" onClick={handleOpenEditPopup} ></button>
                <button className="task__button" type="submit" onClick={onSubmitDelete}></button>
            </div>
        </Reorder.Item>
    );
}

export default Task;


