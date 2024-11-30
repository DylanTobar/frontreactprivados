import React, { useState } from 'react';
import axios from 'axios';

const ProyectsForm = () => {

    const [proyect_name, setProyect_name] = useState('');
    const [client_name, setClient_name] = useState('');
    const [description, setDescription] = useState('');
    const [est_end_date, setEst_end_date] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log("holaa")
    
        if (!proyect_name || !client_name || !description || !est_end_date) {
          alert('Por favor, completa todos los campos.');
          return;
        }
    
        const userData ={
          proyect_name: proyect_name,
          client_name: client_name,
          description: description,
          est_end_date: est_end_date,
        };
        console.log(userData)
        axios.post('http://localhost:4000/api/proyects/',userData).then((response) => { 
          console.log(response.data.data); 
          
          })
    
        
        
      }


    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>New Proyect</h1>
                <div className='input-box'>
                    <h1>Proyect Name</h1>
                    <input type="text" placeholder='Write the Proyect Name' onChange={e => setProyect_name(e.target.value)} required />
                </div>
                <div className='input-box'>
                    <h1>Client Name</h1>
                    <input type="text" placeholder='Write the Client Name' onChange={e => setClient_name(e.target.value)} required />
                </div>
                <div className='input-box'>
                    <h1>Proyect Description</h1>
                    <input type="text" placeholder='Write a Description' onChange={e => setDescription(e.target.value)} required />
                </div>
                <div className='input-box'>
                    <h1>Estimated End Date</h1>
                    <input type="date" placeholder='' onChange={e => setEst_end_date(e.target.value)} required />
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