import React from 'react'
import './Qualification.css'
export default function Qualification() {
  return (
    <div>
      <div className='Qualification'>
        <div className='quali-left'>
          <h1>
            Education
          </h1>
          <div className='edu'>
            <h3>Master of Computer Applications</h3>
            <p>Madha Engineering College,Chennai</p>
            <p>2022-2024</p>
          </div>
          <div className='edu'>
            <h3>BSc Mathematics</h3>
            <p>Muthurangam Govt Arts College,Vellore</p>
            <p>2019-2022</p>
          </div>
        </div>

        <div className='quali-right'>
          <h2><center>SkillSets</center></h2>
          
          <div className='skill'>
            <div className='skill'>
              <h3>Back-End</h3>
              <ul>
                <li>Java</li>
                <li>SpringBoot</li>
                <li>MySql</li>
              </ul>

            </div>
            <div className='skill'>
              <h3>Front-End</h3>
              <ul>
                <li>ReactJS</li>
                <li>HTML-CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
