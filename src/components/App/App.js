import React from "react";
import { useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "../../index.css";
import Main from '../Main/Main';
import ToDoPage from "../ToDoPage/ToDoPage";
import AddForm from "../AddForm/AddForm";
import EditForm from "../EditForm/EditForm";
import Rewards from "../Rewards/Rewards";
import useClickOutside from "../../hooks/useClickOutside";

function App() {

  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );


  const [importantTasks, setImportantTasks] = useState([...tasks].filter((task) => {
    return task.important === true;
  })
  );

  const [finalTasks, setFinalTasks] = useState(tasks)

  
    function fliterImportant(checked) {
      if (checked) {
        setFinalTasks(importantTasks)
      }
      else setFinalTasks(tasks);
    }


useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setFinalTasks(tasks);
    
  }, [tasks]);



const [isAddFormOpen, setIsAddFormOpen] = useState(false);
const [isEditFormOpen, setIsEditFormOpen] = useState(false);
const [selectedTask, setSelectedTask] = useState({});

let tasksLength = tasks.length

let addRef = useClickOutside(()=> {
  setIsAddFormOpen(false);
})

let editRef = useClickOutside(()=> {
  setIsEditFormOpen(false);
})


function addTask(task) {
    setTasks([...tasks, task]);
    setIsAddFormOpen(false);
  }

function handleAddFormClick() {
    setIsAddFormOpen(true);
}


function handleEditFormClick(task) {
    setIsEditFormOpen(true);
    setSelectedTask(task); //choosing the right task to edit
}


function closeAllPopups() {
    setIsAddFormOpen(false);
    setIsEditFormOpen(false);
}

function checkTask(id) {
  const newTasksChecked = tasks.map((task) => {
    if (task.id === id) {
      task.checked = !task.checked;
    }
    return task;
  });
  setTasks(newTasksChecked);
}

function addToImportant(id) {
  let newTasksChecked = tasks.map((task) => {
    if (task.id === id) {
      task.important = !task.important;
    }
    return task;
  });
  let newImportantTasksChecked = newTasksChecked.filter((task) => {
    return task.important === true;
  });
  setTasks(newTasksChecked);
  setImportantTasks(newImportantTasksChecked)

}


function deleteTask(selectedTask) {
  let newTasks = tasks.filter((task) => {
    return task.id !== selectedTask.id
  });

  let newImportantTasks = newTasks.filter((task) => {
    return task.important === true;
  })
  setTasks(newTasks);
  setImportantTasks(newImportantTasks);

}

function handleClearAll() {
  setTasks([]);
  localStorage.removeItem("tasks");
}


function updateTask(id, body) {

  const newTasksUpdate = tasks.map((task) => {

    if (task.id === id) {
      task.body = body;
      task.check = false;
      task.important = false;
    }

  return task;
  });

  setFinalTasks(newTasksUpdate);
  closeAllPopups()
}


  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/todo" element={<ToDoPage 
      onDeleteTask={deleteTask} 
      onOpenEditForm={handleEditFormClick} 
      tasksLength={tasksLength} 
      tasks={finalTasks} 
      setFinalTasks = {setFinalTasks}
      onAddTask={addTask} 
      onOpenAddForm={handleAddFormClick} 
      checkTask={checkTask}
      addToImportant={addToImportant}
      onClearAll={handleClearAll}
      fliterImportant={fliterImportant}

      />}></Route>
      <Route path="/rewards" element={<Rewards/>}></Route>
      </Routes>
      <AddForm ref={addRef} isOpen={isAddFormOpen} onClose={closeAllPopups} onAddTask={addTask}/>
      <EditForm task={selectedTask} ref={editRef} isOpen={isEditFormOpen} onClose={closeAllPopups} onUpdateTask={updateTask}/>
    </div>
  );
}

export default App;