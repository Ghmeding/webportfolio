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
      <h2>Education & Experience</h2>

      <div className="container x">

        <div className='about__content'>
          <div className='about_cards'>

          <article className='aboutci'>
              <FaAward className='about__icon'/>
              <h5>Associate Analyst</h5>
              <h6>Deloitte</h6>
              <h6>Cloud & Engineering</h6>
              <small>April 2024 - Present</small>
            </article>

            <article className='aboutci'>
              <FaAward className='about__icon'/>
              <h5>Developer</h5>
              <h6>PeopleNet A/S</h6>
              <small>June 2023 - April 2024</small>
            </article>

            <article className='aboutci'>
              <FaAward className='about__icon'/>
              <h5>IT Student Worker</h5>
              <h6>K2 Management</h6>
              <small>February 2021 - March 2022</small>
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
        </div>
      </div>
    </section>
  )
}

export default about