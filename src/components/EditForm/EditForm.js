import React from "react";
import Form from "../Form/Form";
import "./EditForm.css";
import { useState, forwardRef, useEffect} from "react";


const EditForm = forwardRef((props, ref) => { 
    const taskRef = React.useRef();
    const [content, setContent] = useState(props.task.body);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        if(props.isOpen) {
            setContent(props.task.body);
            setIsEmpty(false);
        }
    }, [props.isOpen, props.task.body]);


    function handleChangeTask(e) {
        setContent(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!content) {
            setIsEmpty(true);
            return 
        } 
        else props.onUpdateTask(
            props.task.body = content
        )
        setIsEmpty(false);
    }

    return (
        <Form content={content} taskRef={taskRef} ref={ref} isEmpty={isEmpty} onChange={handleChangeTask} 
        onClose={props.onClose} isOpen={props.isOpen} onSubmit={handleSubmit} name="edit-form" title="Edit task">
            <button className="popup__button popup__edit-button" type="submit">Edit</button>
        </Form>
    );

});

export default EditForm;
