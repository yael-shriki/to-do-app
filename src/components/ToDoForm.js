import React, { useState } from 'react'


const ToDoForm = ({ addToDo }) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addToDo(value);
            // clear the entry after submission
            setValue("")
        }
    }

    return (
        <form className="ToDoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-value" value={value} placeholder="What do you want to do today?" onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className="task-submit-btn">Add Task</button>
        </form>

    );
}

export default ToDoForm;