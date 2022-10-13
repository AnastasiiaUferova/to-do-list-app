import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import "../../index.css";
import Main from '../Main/Main';
import ToDoPage from "../ToDoPage/ToDoPage";
import { Route, Routes } from "react-router-dom";
import AddForm from "../AddForm/AddForm";
import EditForm from "../EditForm/EditForm";
import Rewards from "../Rewards/Rewards";


function App() {


  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = event => {
        if(isAddFormOpen && ref.current && !ref.current.contains(event.target)) {
          setIsAddFormOpen(false);
        }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isAddFormOpen])



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

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/todo" element={<ToDoPage tasks={tasks} onAddTask={addTask} onOpenAddForm={handleAddFormClick} />}></Route>
      <Route path="/rewards" element={<Rewards/>}></Route>
      </Routes>
      <AddForm ref={ref} isOpen={isAddFormOpen} onClose={closeAllPopups} onAddTask={addTask}/>
    </div>
  );
}

export default App;