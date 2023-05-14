import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const headerSocials = () => {
  return (
      <div className='header__socials'>
          <a href="https://www.linkedin.com/in/mukund-yadav-3b2038202/" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/mukund-13" target="_blank"><FaGithub/></a>
      </div>
  )
}

export default headerSocials