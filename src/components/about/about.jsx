import React from 'react'
import './about.css'
import ME2 from '../../assets/me2.jpeg'
import {MdOutlineEngineering} from 'react-icons/md'
import {GiAstronautHelmet} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="AboutImg" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdOutlineEngineering className='about__icon'/>
              <h5>Engineer</h5>
              <small>MLOps, Data, Cloud, Full Stack.</small>
            </article>

            <article className='about__card'>
              <GiAstronautHelmet className='about__icon'/>
              <h5>Astronomy Enthusiast</h5>
              <small>Astrophysics, Star Gazing</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>URC 2020, Voice Assistant, Biometrics</small>
            </article>
          </div>
          <p>Hello! My name is Mukund Yadav. I am currently doing MS in Computer Engineering, and have a BS in Electrical Engineering. I am experienced in Deep Learning, MLOps, Data Analysis and Cloud Computing. I also have experience in Frontend, Backend, Database and Cloud Services. I am strongly passionate about space and astrophysics, you can often find me just reading space journals or star gazing using my telescope. I am also a multi-instrumentalist and an athlete, I played in my school band as the lead guitarist and also played in my school's basketball team as the starting Point Guard! I love to read books, mostly in the non fiction genre but I am always open to explore new fields. In my free time, you can find me doing competitive programming or playing chess. 
          </p>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
      </section>
  )
}

export default about
