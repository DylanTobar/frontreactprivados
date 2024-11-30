import React from 'react';
import imagen from './Dashboard-Example.png'


export default function Welcome() {
  return (
    <div className='body'>
      <h1>Dasboards he Informes</h1>

      <ul>(Ejemplo de como se tendran que ver los dashboard he informes)</ul>
      <img 
        src={imagen}
        alt="" 
        
      />
    </div>
  )
}