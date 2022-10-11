import React from "react";
import "./Form.css";

function From({
    name,
    title,
    children,
    isOpen,
    onSubmit,
    onClose,
    onChange
}) {
    return (
        <div
        className={
            isOpen
            ? `popup popup_type_${name} popup_opened`
            : `popup popup_type_${name}`
        }
        >
        <div className="popup__container">
    <div className="popup__form-container">
        <p className="popup__title">{title}</p>
        <form onSubmit={onSubmit} name={`${name}`} className="popup__form-info">
            <input onChange={onChange} id="task-input" type="text" name="name" className="popup__input" required placeholder="Enter your task"/>
            <div className="popup__button-container">
                <button  onClick={onClose} className="popup__button" type="button">Cancel</button>
                {children}
            </div>
        </form>
    </div>
</div>
        </div>
    );
}

export default From;




/*className={
    isOpen
    ? `popup popup_type_${name} popup_opened`
    : `popup popup_type_${name}`
}*/