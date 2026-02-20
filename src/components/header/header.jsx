import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
      <div className="container header_container">
        <h1 className="titleName">Gustav Meding</h1>
        <h5 className="text-light">Consultant, Deloitte - Cloud & Engineering / Backend Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={require('../../assets/profile.jpg')} alt="me"/>
        </div>
        <a href="#Contact" className='scroll_down'>Scroll Down</a>
      </div>
  )
}

export default header