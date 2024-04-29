import React, { useState } from 'react'


const EditToDoForm = ({ editToDo, task }) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            editToDo(value, task.id);
            // clear the entry after submission
            setValue("")
        }
    }

    return (
        <form className="ToDoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-value" value={value} placeholder="Update task" onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className="task-submit-btn">Update Task</button>
        </form>

    );
}

export default EditToDoForm;