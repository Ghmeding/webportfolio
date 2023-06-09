import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'
import { MdOutlineSchool } from 'react-icons/md'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container x">
        <div className='about__me'>
          <div className='about__me-image'>
              <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about_cards'>

            <article className='aboutci'>
              <FaAward className='about__icon'/>
              <h5>Junior Front-end Developer</h5>
              <small>PeopleNet A/S</small>
            </article>

            <article className='aboutci'>
              <MdSchool className='about__icon'/>
              <h5>Stud. Software Design, MSc</h5>
              <small>IT University of Copenhagen</small>
            </article>

            <article className='aboutci'>
              <MdOutlineSchool className='about__icon'/>
              <h5>Information Science, BSc</h5>
              <small>Aarhus University</small>
            </article>

            </div>

            <p>
            </p>

            <a href="#Contact" id="btn-about" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default about