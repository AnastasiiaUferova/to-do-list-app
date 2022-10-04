import React from "react";
import Form from "../Form/Form";
import "./EditForm.css";

export default function EditForm() {
    return (
        <Form name="edit-form" title="Edit task">
            <button className="popup__button popup__edit-button" type="submit">Edit</button>
        </Form>
    );
}