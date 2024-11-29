import React from 'react'

const DefectsForm = () => {
    return (
        <div className='wrapper'style={{borderRadius:"0"}}>
            <form action="">
                <h1>New Defect</h1>
                <div className='input-box'>
                    <h1>Proyect Name</h1>
                    <input type="text" placeholder='Proyect Name' required disabled />
                </div>
                <div className='input-box'>
                    <h1>Assigned to:</h1>
                    <input type="text" placeholder='Select the user' required />
                </div>
                <div className='input-box'>
                    <h1>Type</h1>
                    <input type="text" placeholder='Select the Type' required />
                </div>
                <div className='input-box'>
                    <h1>Defect Description</h1>
                    <input type="text" placeholder='Write a Description' required />
                </div>
                <div className='input-box'>
                    <h1>Estimated End Date</h1>
                    <input type="date" placeholder='' required />
                </div>
                <button type='submit'>Closure Request</button>
                <button type='submit'>Close Defect</button>
            </form>
        </div>
    )
}
export default DefectsForm;