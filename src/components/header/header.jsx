import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1 className="titleName">Gustav Meding</h1>
        <h5 className="text-light">Junior Front-end Developer / Stud. Software Design, MSc</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={require('../../assets/profile.jpg')} alt="me"/>
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header