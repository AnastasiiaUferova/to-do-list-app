import React from "react";
import "./ImportantList.css";
import TaskList from "../TaskList/TaskList"

function ImportnantList() {
    return (
        <div>
            <div className="important-list__title-container">
                <h2 className="important-list__title">Important Tasks</h2>
            </div>
            <TaskList />
        </div>
    );
}

export default ImportnantList;