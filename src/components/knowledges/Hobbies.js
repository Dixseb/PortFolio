import React from 'react'

const Hobbies = () => {
  return (
    <div className='hobbies'>
        <h3>Interêts</h3>
        <ul>
        <li className='hobby'>
            <i className='fas fa-running'></i>
            <span>Course a pied</span>
        </li>
        <li className='hobby'>
            <i className='fas fa-futbol'></i>
            <span>Football</span>
        </li>
        <li className='hobby'>
            <i className='fas fa-car'></i>
            <span>Karting</span>
        </li>
        <li className='hobby'>
            <i className='fas fa-gamepad
'></i>
            <span>JeuxVideo</span>
        </li>
        <li className='hobby'>
            <i className='fas fa-film'></i>
            <span>Cinéma</span>
        </li>
        </ul>
    </div>
  )
}

export default Hobbies