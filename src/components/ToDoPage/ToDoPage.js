import React from "react";
import "./ToDoPage.css";
import { useCallback, useEffect, useState} from "react";
import { useDebouncedCallback } from 'use-debounce';
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import ImportnantList from "../ImportantList/ImportantList";



function ToDoPage() {

    const [isInputVisible, setInputVisible] = useState(true)

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
                <h1 className="td-page__title">TODO</h1>
                {isInputVisible && <TaskInput /> }
                <TaskList />
                <ImportnantList />
                <div className="td-page__button-container">
                <button className="td-page__button_clear">Clear All</button>
                {!isInputVisible && <button className="td-page__button_add"></button>}
                </div> 
         
            </div>
        </div>
    );
}

export default ToDoPage;