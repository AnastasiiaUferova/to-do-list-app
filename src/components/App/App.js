import React from "react";
import "./App.css";
import "../../index.css";
import Main from '../Main/Main';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
