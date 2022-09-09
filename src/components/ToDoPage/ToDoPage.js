import React from "react";
import "./ToDoPage.css";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList"

function ToDoPage() {
    return (
        <div className="td-page"> 
            <div className="td-page__container">
                <h1 className="td-page__title">TODO</h1>
                <TaskInput />
                <TaskList />
            </div>
        </div>
    );
}

export default ToDoPage;