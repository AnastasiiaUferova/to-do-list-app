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

useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

const [isAddFormOpen, setIsAddFormOpen] = useState(false);
const [isEditFormOpen, setIsEditFormOpen] = useState(false);
const [selectedTask, setSelectedTask] = useState({});

let tasksLength = tasks.length

let ref = useClickOutside(()=> {
  closeAllPopups();
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


function deleteTask(selectedTask) {
  const newTasks = tasks.filter((task) => {
    return task.id !== selectedTask.id
  });
  setTasks(newTasks);
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
    }

  return task;
  });

  setTasks(newTasksUpdate);
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
      tasks={tasks} 
      onAddTask={addTask} 
      onOpenAddForm={handleAddFormClick} 
      checkTask={checkTask}
      onClearAll={handleClearAll}
      />}></Route>
      <Route path="/rewards" element={<Rewards/>}></Route>
      </Routes>
      <AddForm ref={ref} isOpen={isAddFormOpen} onClose={closeAllPopups} onAddTask={addTask}/>
      <EditForm task={selectedTask} ref={ref} isOpen={isEditFormOpen} onClose={closeAllPopups} onUpdateTask={updateTask}/>
    </div>
  );
}

export default App;