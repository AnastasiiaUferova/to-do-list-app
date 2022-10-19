import React from "react";
import Form from "../Form/Form";
import "./AddForm.css";
import { useState, useEffect, forwardRef } from "react";
import { nanoid } from "nanoid";


const AddForm = forwardRef((props, ref) => { 
    const [content, setContent] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        if(props.isOpen===false) {
            setContent("");
            setIsEmpty(false);
        }
    }, [props.isOpen]);


    function handleChangeTask(e) {
        setContent(e.target.value);
    }

    const taskText = content.trim();

    function handleSubmit(e) {
        e.preventDefault();

        const task = {
            id: nanoid(),
            body: taskText,
            checked: false,
            important: false,
        };

        if (!content) {
            setIsEmpty(true);
            return 
        } 
        else props.onAddTask(task);
        setContent('');
        setIsEmpty(false);
    }

    return (
        <Form content={content} ref={ref} isEmpty={isEmpty} onChange={handleChangeTask} 
        onClose={props.onClose} isOpen={props.isOpen} onSubmit={handleSubmit} name="add-form" title="Add task">
            <button className="popup__button popup__send-button" type="submit"></button>
        </Form>
    );
});

export default AddForm;
