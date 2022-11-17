import React from 'react'
import './Default.css'
import def_img from '../img/default.jpg'

const Default = () => {
  return (
    <div
      className='main-container'
      style={{
        backgroundImage: `url(${def_img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
      }}
    >
      <div className='child-container'>
        <h1>Sign In to Add Something!</h1>
      </div>
    </div>
  )
}

export default Default
