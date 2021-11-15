import axios from "axios";
import { Fragment, useState } from "react";
import classes from "./AddTask.module.css";
import Task from "./Task";
import useSendRequest from "../hooks/use-send-request";;


const AddTask = props => {
    const [text, setText] = useState("");
    const [error, setError] = useState(false);
    const addTask = useSendRequest({
        url:"http://localhost:8080/addTask",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            text: text
        }
    },setError,() => {
        props.setTask(text);
        setText("");
    })
    const textHandler = (event) => {
        setText(event.target.value);
    }
    return (
        <Fragment>
            {error && <Task>An Error Occurance</Task>}
            {!error &&
                <form className={classes["taskForm"]} onSubmit={addTask}>
                    <div className={classes["task-wrap1"]}>
                        <input value={text} type="text" onChange={textHandler} className={classes["task-input"]} />
                    </div>
                    <div className={classes["task-wrap2"]}>
                        <button className={classes["task-button"]}>
                            Add Task
                        </button>
                    </div>
                </form>}
        </Fragment>
    )
}

export default AddTask;