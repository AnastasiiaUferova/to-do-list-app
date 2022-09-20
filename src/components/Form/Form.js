import React from "react";
import "./Form.css";

function From({
    name,
    title,
    children
}) {
    return (
        <div
        className={
            `popup popup_type_${name} popup_opened`
        }
        >
        <div className="popup__container">
    <div className="popup__form-container">
        <p className="popup__title">{title}</p>
        <form name={`${name}`} className="popup__form-info">
            <input id="task-input" type="text" name="name" className="popup__input" minlength="{2}" maxlength="{40}" required />
            <div className="popup__button-container">
                <button className="popup__cancel-button" type="button"></button>
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