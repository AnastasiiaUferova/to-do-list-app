import React from "react";
import { NavLink } from "react-router-dom";
import "./Main.css"

function Main() {
    return (
        <div className="main"> 
            <div className="main__container">
                <h1 className="main__title">TODO</h1>
                <p className="main__subtitle">Simple ToDo list app design</p>
                <NavLink to="/todo"><button className="main__link">Explore</button></NavLink>
            </div>
        </div>
    );
}

export default Main;