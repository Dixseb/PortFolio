import React from 'react'
import Navigation from '../components/Navigation'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Contact = () => {
  return (
    <div className='contact'>
        <Navigation />
        <div className='contactContent'>
          <div className='header'>
          <div className='contactBox'>
            <h1>Contactez-moi</h1>
            <ul>
              <li className='map'>
                <i className='fas fa-map-marker-alt'></i>
                <span>Le Perreux Sur Marne</span>
              </li>
              <li className='phone'>
                <i className='fas fa-mobile-alt'></i>
                  <span>06 11 73 80 77</span>
              </li>
              <li className='mail'>
                <i className='far fa-envelope'></i>
                <CopyToClipboard text='sebastiangomes77@gmail.com'>
                  <span className='clickInput'
                  onClick={() => { alert('E-mail copié !');}}>
                  sebastiangomes77@gmail.com
                  </span>
                </CopyToClipboard>
              </li>
            </ul>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Contact