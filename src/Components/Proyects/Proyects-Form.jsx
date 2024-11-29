import React from 'react'

const ProyectsForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>New Proyect</h1>
                <div className='input-box'>
                    <h1>Proyect Name</h1>
                    <input type="text" placeholder='Write the Proyect Name' required />
                </div>
                <div className='input-box'>
                    <h1>Client Name</h1>
                    <input type="text" placeholder='Write the Client Name' required />
                </div>
                <div className='input-box'>
                    <h1>Proyect Description</h1>
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
                <button type='submit'>Create Proyect</button>
                <button type='submit'>Complete Proyect</button>
            </form>
        </div>
    )
}
export default ProyectsForm;