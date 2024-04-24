import React, { useState } from 'react'
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const ToDoWrapper = () => {
    const [toDos, setToDos] = useState([])

    const addToDo = (todo) => {
        setToDos([...toDos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
        console.log(toDos)
    }

    return (
        <div className="ToDoWrapper">
            <h1>Get Things Done</h1>
            <ToDoForm addToDo={addToDo} />
            {toDos.map((todo) => (
                <ToDo task={todo} key={todo.id} />
            ))}
            <ToDo />
        </div>

    );
}

export default ToDoWrapper;