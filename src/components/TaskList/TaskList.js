import React from "react";
import "./TaskList.css";
import Task from "../Task/Task";

function TaskList({tasks}) {
    return (
        <div className="task-list"> 
            {tasks && tasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
        </div>
    );
}

export default TaskList;
