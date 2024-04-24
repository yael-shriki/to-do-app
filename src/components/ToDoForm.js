import React from 'react'

const ToDoForm = () => {
    return (
        <form classname="ToDoForm" ToDoWrapper>
            <input type="text" className="task" placeholder="What do you want to do today?" />
            <button type="submit" classname="task-submit-btn">Add Task</button>
        </form>

    );
}

export default ToDoForm;