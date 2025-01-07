import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div className='contact'>
      <div className='contact-title'>
        <h1>Connect with me</h1>
      </div>
      <div className='contact-section'>
        
          <h2>Hire Me</h2>
          <p>Reach out to me for any queries or suggestions</p>
          <div className='contact-section-right'>
            <form action='mailto:kamal082001@gmail.com'>
              <input type='text' className='input-field'  placeholder='Organisation Name' /><br />
              <textarea className='input-field'  placeholder='Message' /><br />
              <button type='submit' className='btn-submit'>Connect</button>
            </form>
          </div>
        </div>
      

    </div>
  )
}
