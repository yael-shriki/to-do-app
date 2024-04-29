import React, { useState } from 'react'
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import EditToDoForm from './EditToDoForm'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const ToDoWrapper = () => {
    const [toDos, setToDos] = useState([])

    const addToDo = (todo) => {
        setToDos([...toDos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
        console.log(toDos)
    }

    const toggleComplete = (id) => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTask = (id) => {
        setToDos(toDos.filter(todo => todo.id !== id))
    }

    const editToDo = (id) => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    return (
        <div className="ToDoWrapper">
            <h1>Get Things Done!</h1>
            <ToDoForm addToDo={addToDo} />
            {toDos.map((todo) => (
                todo.isEditing ? (<EditToDoForm editToDo={editTask} task={todo} />) :
                    (<ToDo task={todo} key={todo.id} toggleComplete={toggleComplete}
                        deleteTask={deleteTask} editToDo={editToDo} />)
            ))}
        </div>

    );
}

export default ToDoWrapper;