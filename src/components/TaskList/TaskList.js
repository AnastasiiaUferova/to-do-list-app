import React from "react";
import "./TaskList.css";
import Task from "../Task/Task";
import image from "../../images/DecorImage1.svg"

function TaskList({tasks, checkTask, tasksLength}) {

    const TaskList = <div className= "task-list" > 
    {tasks && tasks.map((task) => (
            <Task checkTask={checkTask} key={task.id} task={task} />
        ))
    }
    </div> 
    const decorImage = 
    <div className= "task-list__image-container">
        <img className="task-list__image" alt="decor" src={image}></img>
    </div>
    



    return (
        <div > 
        {tasksLength === 0 ? decorImage : TaskList}
        </div>
    );
}

export default TaskList;
