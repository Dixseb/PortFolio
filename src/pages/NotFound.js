import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h3> Désolé cette page n'existe pas !</h3>
        <Link>
          <i className='fas fa-home'></i>
          <span> Acceuil</span>
        </Link>
    </div>
  )
}

export default NotFound