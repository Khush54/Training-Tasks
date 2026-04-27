import React, { useActionState, useId } from 'react';

function TaskForm({ onAdd }) {
    const id = useId(); 

    const [error, action, isPending] = useActionState(async (prevState, formData) => {
        const title = formData.get("taskTitle");
        if (!title.trim()) return "Task cannot be empty!";
        await onAdd(title);
        return null;
    }, null);

    return (
        <form action={action} className="taskForm">
            <label htmlFor={id} className="sr-only"></label>
            <input 
                id={id}
                name="taskTitle" 
                type="text" 
                placeholder='Add a task or idea' 
                disabled={isPending}
            />
            <button type="submit" disabled={isPending}>
                {isPending ? "Adding..." : "Add"}
            </button>
            {error && <p className="error-msg" style={{color: 'red'}}>{error}</p>}
        </form>
    );
}

export default TaskForm