import React from "react";
import Form from "../Form/Form";
import "./AddForm.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function AddForm({isOpen, onClose, onAddTask}) {
    const [content, setContent] = useState("");

    function handleChangeTask(e) {
        setContent(e.target.value);
    }

    const taskText = content.trim();

    function handleSubmit(e) {
        e.preventDefault();

    const task = {
            id: nanoid(),
            body: taskText,
    };

    if (!content) {
        return 
    } else onAddTask(task);
        setContent('');
    }

    useEffect(() => {
        setContent('');
    }, [isOpen]);

    return (
        <Form onChange={handleChangeTask} onClose={onClose} isOpen={isOpen} onSubmit={handleSubmit} name="add-form" title="Add task">
            <button className="popup__button popup__send-button" type="submit"></button>
        </Form>
    );
};
