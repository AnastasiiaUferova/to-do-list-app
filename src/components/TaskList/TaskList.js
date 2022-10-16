import React from "react";
import "./TaskList.css";
import Task from "../Task/Task";

function TaskList({tasks, checkTask}) {
    return (
        <div className="task-list"> 
            {tasks && tasks.map((task) => (
                    <Task checkTask={checkTask} key={task.id} task={task} />
                ))}
        </div>
    );
}

export default TaskList;
