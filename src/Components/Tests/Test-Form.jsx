import React from 'react'

const TestForm = () => {
    return (
        <div className='wrapper'style={{borderRadius:"0"}}>
            <form action="">
                <h1>New Test</h1>
                <div className='input-box'>
                    <h1>Proyect Name</h1>
                    <input type="text" placeholder='Proyect Name' required disabled />
                </div>
                <div className='input-box'>
                    <h1>Task Title</h1>
                    <input type="text" placeholder='Title of the Task' required disabled/>
                </div>
                <div className='input-box'>
                    <h1>Scenario</h1>
                    <input type="text" placeholder='Select the Scenario' required />
                </div>
                <div className='input-box'>
                    <h1>Case</h1>
                    <input type="text" placeholder='Select the Case' required />
                </div>
                <div className='input-box'>
                    <h1>Criteria</h1>
                    <input type="text" placeholder='Select the Criteria' required />
                </div>
                <div className='input-box'>
                    <h1>Test Description</h1>
                    <input type="text" placeholder='Write a Description' required />
                </div>
                <div className='input-box' style={{height: "400px", marginBottom:"-30px"}}>
                    <h1>Code</h1>
                    <input type="text" placeholder='Write the Code to Test' required />
                </div>
                <button type='submit'style={{marginBottom:"-20px"}}>Run Test</button>
                <div className='input-box'style={{height: "200px",marginBottom:"-20px"}} >
                    <h1>Results</h1>
                    <input type="text" placeholder='Results of the Test' required disabled/>
                </div>
                <div className='input-box'>
                    <h1>Test Comments</h1>
                    <input type="text" placeholder='Write a Comments' required />
                </div>
            
               
                <button type='submit'>Sumbit Results</button>
                <button type='submit'>Complete Test</button>
            </form>
        </div>
    )
}
export default TestForm;