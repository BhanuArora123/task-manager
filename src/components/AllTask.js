import Task from "./Task";
import classes from "./AllTask.module.css";
import { Fragment, useCallback, useEffect, useState } from "react";
import axios from "axios";
import useSendRequest from "../hooks/use-send-request";

const AllTask = (props) => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(false);
    const getTasks = useSendRequest({
        url:"http://localhost:8080/getAllTasks",
        method: "GET"
    },setError,(data) => {
        setTasks(data.tasks);
    });
    let { task } = props;
    useEffect(() => {
        getTasks();
    },[task]);
    return (
        <Fragment>
            {error && <Task>Something went wrong</Task>}
            {!error && tasks.length === 0 && <Task>No Tasks Found</Task>}
            {!error && tasks.length > 0 &&
                <div className={classes["allTask"]}>
                    {
                        tasks.map((task) => {
                            return (
                                <Task
                                    key={task._id} >
                                    {task.text}
                                </Task>
                            )
                        })
                    }
                </div>
            }
        </Fragment>
    )
}

export default AllTask;