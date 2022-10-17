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

let tasksLength = tasks.length
console.log(tasksLength)

let ref = useClickOutside(()=> {
  setIsAddFormOpen(false);
})


function addTask(task) {
    setTasks([...tasks, task]);
    setIsAddFormOpen(false);
  }

function handleAddFormClick() {
    setIsAddFormOpen(true);
}


function closeAllPopups() {
    setIsAddFormOpen(false);
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


  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/todo" element={<ToDoPage tasksLength={tasksLength} tasks={tasks} onAddTask={addTask} onOpenAddForm={handleAddFormClick} checkTask={checkTask} />}></Route>
      <Route path="/rewards" element={<Rewards/>}></Route>
      </Routes>
      <AddForm ref={ref} isOpen={isAddFormOpen} onClose={closeAllPopups} onAddTask={addTask}/>
    </div>
  );
}

export default App;