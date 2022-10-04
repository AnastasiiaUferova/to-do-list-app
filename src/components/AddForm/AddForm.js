import React from "react";
import Form from "../Form/Form";
import "./AddForm.css";

export default function AddForm() {
    return (
        <Form name="add-form" title="Add task">
            <button className="popup__button popup__edit-button"></button>
        </Form>
    );
};
