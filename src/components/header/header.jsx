import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './headerSocials'
import {Typewriter}  from 'react-simple-typewriter'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Mukund Yadav</h1>
        <h5 className="text-light">
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['Engineer','AI Researcher', 'IEEE Author', 'Athlete', 'Musician']}
          />
          </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header