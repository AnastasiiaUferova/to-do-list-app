import React from "react";
import "./TaskList.css";
import Task from "../Task/Task";
import image from "../../images/DecorImage1.svg";
import {Reorder} from 'framer-motion';

function TaskList({setFinalTasks,addToImportant, tasks, checkTask, tasksLength, onDeleteTask, onOpenEditForm}) {

    const TaskList = <Reorder.Group as="div" axys="y" values={tasks} onReorder={setFinalTasks} className= "task-list" > 
    {tasks && tasks.map((task) => {
            return <Task onOpenEditForm={onOpenEditForm} 
            checkTask={checkTask} 
            onDeleteTask={onDeleteTask} 
            key={task.id} 
            task={task}
            addToImportant={addToImportant}/>
})
    }
    </Reorder.Group> 
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
