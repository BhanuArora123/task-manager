import { useState } from "react";
import classes from "./App.module.css";
import AddTask from './components/AddTask';
import AllTask from './components/AllTask';

function App() {
  const [task , setTask] = useState("");
  return (
    <section className={classes["app-back"]}>
      <AddTask setTask={setTask}/>
      <AllTask task={task} />
    </section>
  );
}

export default App;
