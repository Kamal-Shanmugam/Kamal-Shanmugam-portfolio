import React from 'react'
import './Home.css'
import Kamal_Profile from '../Assets/Kamal_Profile.png'
export default function Home() {
  return (
    <div className='Hero'>
      <img src={Kamal_Profile} alt='Kamal S' />
      <h1> <span>I'm Kamal,</span> Full-Stack Web Developer living in Chennai,India</h1>
      <p>I'm a Full-Stack Web Developer, I love to build web applications and I'm passionate about learning new technologies</p>
      <div className='hero-actions'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'><a href=''>My Resume</a></div>
      
      </div>
    </div>
  )
}
