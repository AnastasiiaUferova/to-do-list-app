import React from "react";
import "./TaskList.css";
import Task from "../Task/Task";

function TaskList({tasks, checkTask}) {
    return (
        <div className="task-list"> 
            {tasks && tasks.map((task) => (
                    <Task checkTask={checkTask} key={task.id} task={task} />
                ))
            }
        </div>
    );
}

export default TaskList;

/*  .sort((a, b) => {
                    if (a.cheked > b.checked)
                        return -1;
                    if (a.cheked < b.checked)
                        return 1;
                    return 0;
                })*/