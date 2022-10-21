import React from "react";
import "./ToDoPage.css";
import { useCallback, useEffect, useState, useRef} from "react";
import { NavLink } from "react-router-dom";
import { useDebouncedCallback } from 'use-debounce';
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";

function ToDoPage({setFinalTasks, fliterImportant, tasks, onAddTask, onOpenAddForm, checkTask, tasksLength, onDeleteTask, onOpenEditForm, onClearAll, addToImportant}) {

    const [isInputVisible, setInputVisible] = useState(true);
    const [checked, setChecked] = useState(false);

    const checkedRef = useRef(null);

    const handleCheck = () => {
        if (checkedRef.current.checked) {
            setChecked(!checked)
            fliterImportant(!checked);
        } else {
            setChecked(!checked)
            fliterImportant(!checked);
        }
    };

    useEffect(() => {
        if(checked) {
            fliterImportant(checked)
        }
        
    }, [checked, fliterImportant]);


    const Resize = useCallback(
        (width) => {
            if (width > 500) {
                setInputVisible(true)
            }
            else setInputVisible(false)
        }, []
    )  //general function

    useEffect(() => {
        Resize(window.innerWidth)
    }, [Resize]) // initial rendering

    const dynamicResize = useDebouncedCallback(
        () => {
            Resize(window.innerWidth)
        }, 200
    ) 

    useEffect(() => {
        window.addEventListener('resize', dynamicResize)
        return () => {
                window.removeEventListener('resize', dynamicResize);
        } 
    }, [dynamicResize]) // when changing window width

    return (
        <div className="td-page">
        <div className="td-page__container">
        <div className="td-page__title-container">
            <NavLink to="/"><button className="td-page__title rewards__logo">TODO</button></NavLink>
            <div className="td-page__unils-container">
                <div className="td-page__important-container">
                    <input
                    ref={checkedRef} onChange={handleCheck} defaultChecked={false} className="task__check_important" type="checkbox" />
                </div>
                <div className="td-page__rewards-container">
                    <NavLink to="/rewards"><button className="td-page__rewards"></button></NavLink>
                    <p className="td-page__rewards-count">Total scored in 7 days:</p>
                    <div className="td-page__rewards-count-container">
                    <p className="td-page__rewards-count">90 points</p>
                    </div>
                </div>
            </div>
        </div>
                {isInputVisible && <TaskInput onAddTask={onAddTask} /> }
                <TaskList onOpenEditForm={onOpenEditForm} 
                onDeleteTask={onDeleteTask} 
                tasksLength={tasksLength} 
                checkTask={checkTask} 
                onAddTask={onAddTask} 
                tasks={tasks}
                addToImportant={addToImportant}
                setFinalTasks = {setFinalTasks}/>
                <div className="td-page__button-container">
                    <button onClick={onClearAll} className="td-page__button_clear">Clear All</button>
                {!isInputVisible && <button className="td-page__button_add" onClick={onOpenAddForm}></button>}
                </div> 
            </div>
        </div>
    );
}

export default ToDoPage;

/*
<div className="td-page__important-container">
        <input className="task__check_important" type="checkbox" />
</div>
*/
