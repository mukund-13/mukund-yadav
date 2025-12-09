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
          <p>Hello! My name is Mukund Yadav. I am a Machine Learning Engineer/Software Engineer at Microsoft, working on cloud based solutions for foundational models and post training optimization. I work mostly with C++ and PyTorch. I have done ML Research in the past, and that work has been published in IEEE as well. Feel free to reachout to me using my contact info on this page, happy to chat!
          </p>
          {/* <a href="#contact" className='btn btn-primary'>Contact Me</a> */}
        </div>
      </div>
      </section>
  )
}

export default about
