import React from "react";
import "./ErrorMessage.css";

function ErrorMessage ({isEmpty}) {

    const errorClassName = `${isEmpty ? "error-message__text_visible error-message__text" : "error-message__text"}`;
    
    return (
        <div className="error-message">
            <span className={errorClassName}>Enter your task</span>
        </div>
        )
}

export default ErrorMessage;