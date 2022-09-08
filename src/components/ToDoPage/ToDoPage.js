import React from "react";
import "./ToDoPage.css";
import TaskInput from "../TaskInput/TaskInput";

function ToDoPage() {
    return (
        <div className="td-page"> 
            <div className="td-page__container">
                <h1 className="td-page__title">TODO</h1>
                <TaskInput />
            </div>
        </div>
    );
}

export default ToDoPage;