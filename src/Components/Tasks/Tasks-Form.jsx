import React from 'react'

const TasksForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>New Task</h1>
                <div className='input-box'>
                    <h1>Proyect Name</h1>
                    <input type="text" placeholder='Write the Proyect Name' required disabled />
                </div>
                <div className='input-box'>
                    <h1>Task Title</h1>
                    <input type="text" placeholder='Write the Title of the Task' required />
                </div>
                <div className='input-box'>
                    <h1>Task Description</h1>
                    <input type="text" placeholder='Write a Description' required />
                </div>
                <div className='input-box'>
                    <h1>Estimated End Date</h1>
                    <input type="date" placeholder='' required />
                </div>
                <div className='input-box'>
                    <h1>Assigne To:</h1>
                    <input type="text" placeholder='Select the Proyect Manager' required />
                </div>
                <button type='submit'>Create Task</button>
                <button type='submit'>Closure Request</button>
                <button type='submit'>Complete Task</button>
            </form>
        </div>
    )
}
export default TasksForm;