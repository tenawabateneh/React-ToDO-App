import { useState } from "react";
import Tasks from "./component/task";

import './App.css'

const App = () => {
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])

    const handleSubmit = () => {
        if (task)
            setTaskList([...taskList, task])
        
    }

    const listedTask = () => {
        return taskList.map((taskItem, index) => <Tasks task={taskItem} key={index} />)
    }

    return (
        <div className="App">
            <h2>ToDO List App</h2>
            <input name="taskname" type="text" placeholder="Write any task here..." onChange={event => setTask(event.target.value)} value={task} />
            <button onClick={handleSubmit}><b>ADD TASK</b></button>
            <div className="component">{listedTask()}</div>
        </div>
    )
}

export default App;
