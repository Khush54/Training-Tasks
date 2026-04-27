import React, { useState } from 'react'

function TaskForm({onAdd}) {
    const[taskTitle, setTaskTitle] = useState("");

    function handleSubmit(){
        if(!taskTitle.trim()) return null;
        onAdd(taskTitle);
        setTaskTitle("")
    }
    return (
        <div className="taskForm">
                <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder='Add a task or idea' />
                <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default TaskForm