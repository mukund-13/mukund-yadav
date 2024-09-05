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
              <h5>Engineering</h5>
              <small>Machine Learning, Quantiative Modeling, Software</small>
            </article>

            <article className='about__card'>
              <GiAstronautHelmet className='about__icon'/>
              <h5>Research</h5>
              <small>Deep Learning, Computer Vision, NLP, LLMs, Transformers, Diffusion</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Technology</h5>
              <small>Python, C++, TypeScript, PyTorch, TensorFlow, React, Express, AWS</small>
            </article>
          </div>
          <p>Hello! My name is Mukund Yadav. I am currently doing my MS in Computer Engineering, where my thesis explores Machine Learning techniques in improving CT imaging for COVID-19 patients. I am experienced in Deep Learning, Computer Vision, LLMs, Quantitative Modeling, Data Analysis and Software Engineering. I have a keen interest in space and astronomy, you can often find me just reading space journals or star gazing using my telescope. I am also a multi-instrumentalist and an athlete, I played in my school band as the lead guitarist and also played in my school's basketball team as the starting Point Guard! I love reading books, mostly non fiction but always open to explore new fields. Teaching is also a big passion of mine, I often teach math and computer programming to K-12 students, and also have served as the head TA in some college level CS/ECE classes.
          </p>
          {/* <a href="#contact" className='btn btn-primary'>Contact Me</a> */}
        </div>
      </div>
      </section>
  )
}

export default about
