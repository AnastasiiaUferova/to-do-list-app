import React from "react";
import Form from "../Form/Form";
import "./AddForm.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function AddForm({isOpen, onClose, onAddTask}) {
    const [content, setContent] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);

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
        setIsEmpty(true);
        return 
    } else onAddTask(task);
        setContent('');
        setIsEmpty(false);
    }



    useEffect(() => {
        setContent('');
    }, [isOpen]);

    return (
        <Form isEmpty={isEmpty} onChange={handleChangeTask} onClose={onClose} isOpen={isOpen} onSubmit={handleSubmit} name="add-form" title="Add task">
            <button className="popup__button popup__send-button" type="submit"></button>
        </Form>
    );
};
