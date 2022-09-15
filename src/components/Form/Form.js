import React from "react";
import "./Form.css";

function From({
    name,
    isOpen,
    onClose,
    title,
    submitText = "Save",
    children,
    onSubmit,
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
            <h2 className="popup__title">{title}</h2>
            <form onSubmit={onSubmit} name={`${name}`} className="popup__form-info">
            <input id="username-input" type="text" name="name" value={name || ""} className="popup__input popup__input_type_name" minLength="{2}" maxLength="{40}" required />
                <div className="popup__button-container">
                    <button className="popup__cancel-button" type="submit">
                    {submitText}
                    </button>
                    {children}
                </div>
            </form>
        </div>
        </div>
    );
}

export default From;