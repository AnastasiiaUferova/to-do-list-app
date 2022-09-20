import React from "react";
import "./App.css";
import "../../index.css";
import Main from '../Main/Main';
import ToDoPage from "../ToDoPage/ToDoPage";
import { Route, Routes } from "react-router-dom";
import AddForm from "../AddForm/AddForm";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/todo" element={< ToDoPage/>}></Route>
      </Routes>
      <AddForm />
    </div>
  );
}

export default App;