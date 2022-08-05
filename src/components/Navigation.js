import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='sidebar'>
        <div className='id'>
            <div className='idContent'>
                <img src="./media/seb.jpg" alt="profil-pic"/>
                <h3>Seb</h3>
            </div>
        </div>

        <div className='navigation'>
            <ul>
                <li>
                    <Link exact to='/' activeClasseName='navActive'>
                        <i className='fas fa-home'></i>
                        <span>Acceuil</span>
                    </Link>
                </li>
                <li>
                    <Link exact to='/competences' activeClasseName='navActive'>
                        <i className='fas fa-mountain'></i>
                        <span>Competences</span>
                    </Link>
                </li>
                <li>
                    <Link exact to='/portfolio' activeClasseName='navActive'>
                        <i className='fas fa-images'></i>
                        <span>PortFolio</span>
                    </Link>
                </li>
                <li>
                    <Link exact to='/contact' activeClasseName='navActive'>
                        <i className='fas fa-address-book'></i>
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
        </div>

        <div className='socialNetwork'>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/sebastian-gomes/" target="_blank"
                    rel="noopener noreferrer" ><i className='fab fa-linkedin'>
                    </i></a>
                </li>
                <li>
                    <a href="https://github.com/Dixseb?tab=repositories" target="_blank"
                    rel="noopener noreferrer" ><i className='fab fa-github'>
                    </i></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navigation