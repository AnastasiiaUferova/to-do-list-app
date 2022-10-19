import React from "react";
import { forwardRef } from "react";
import "./Form.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Form = forwardRef((props, ref) => {


    return (
        <div
        className={
            props.isOpen
            ? `popup popup_type_${props.name} popup_opened`
            : `popup popup_type_${props.name}`
        }
        >
            <div className="popup__container">
                <div className="popup__form-container">
                    <p className="popup__title">{props.title}</p>
                    <form ref={ref} onSubmit={props.onSubmit} name={`${props.name}`} className="popup__form-info">
                        <input ref={props.taskRef} value={props.content} onChange={props.onChange} id="task-input" type="text" name="name" className="popup__input" placeholder="Enter your task"/>
                        <ErrorMessage isEmpty={props.isEmpty}/>
                        <div className="popup__button-container">
                            <button onClick={props.onClose} className="popup__button" type="button">Cancel</button>
                            {props.children}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
})

export default Form;
