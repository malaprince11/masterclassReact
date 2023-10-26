"use client"
import './ToDOList.css'
import React, { useState } from 'react'

interface ITask {
    name: string,
    done: boolean,
    id: number
}

const ToDoList = () => {
    const [task, setTask] = useState<ITask>({ name: '', done: false, id: 1 })
    const [taskArray, setTaskArray] = useState<ITask[]>([])
    const [id, setId] = useState(2)

    const inputChange = (e: any) => {
        setTask({ name: e.target.value, done: false, id: id })
    }

    const inputSubmit = (e: any) => {
        e.preventDefault();
        if (task?.name) {
            const newTaskArray = [...taskArray, task]
            setTaskArray(newTaskArray);
            setTask({ name: '', done: false, id: id })
            setId(id + 1)
        }


    }
    const toggleTask = (id: number) => {
        const updatedStatus = taskArray.map((task) =>
            task.id === id ? { ...task, done: !task.done } : task);
        setTaskArray(updatedStatus)
    }
    const handleDelete = (index: any) => {
        setTaskArray(taskArray.filter((_, i) => i !== index));
    };

    return (
        <div className='list_container'>
            <h1>ToDoList</h1>
            <form className='form_input' onSubmit={inputSubmit}>
                <input type='text' className='task_input' value={task.name} onChange={inputChange} placeholder="Enter a task" />
                <button className='form_button' type='submit'>Add task</button>
            </form>
            <ul>
                {taskArray.map((task, i) => (
                    <li className='list' key={i}>
                        <p className='task_text'>{task.name}</p>
                        <button className='toggle_button' onClick={() => toggleTask(task.id)}>Changer de status</button>
                        {task.done === false ?
                            <button className='toggle_button' onClick={() => handleDelete(i)}>⛔️</button>
                            :
                            <button className='toggle_button'>✅</button>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList