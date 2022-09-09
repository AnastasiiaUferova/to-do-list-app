import React from "react";
import "./TaskList.css";
import "../Task/Task"
import Task from "../Task/Task";

function TaskList() {
    return (
        <div className="task-list"> 
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    );
}

export default TaskList;