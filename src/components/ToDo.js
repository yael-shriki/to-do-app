import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({ task, toggleComplete, deleteTask, editToDo }) => {
    return (
        <div className="ToDo">
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed" : "incompleted"}`}> {task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editToDo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />
            </div>
        </div>

    );
}

export default ToDo;