import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-left'>
                    <h2>Kamal</h2>
                    <p>A Full Stack Web Developer</p>
                    <address>
                        <p>Thuraipakkam</p>
                        <p>Chennai,Tamil Nadu</p>
                        <p>India-600097</p>
                    </address>
                </div>
                <hr />
                <div className='footer-top-right'>
                    <div className='footer-social-icons'>
                        <a href='https://www.linkedin.com/in/kamal-shanmugam-7aa6a22a6/' >linkedin</a>
                        <a href='https://www.instagram.com/__luigi_13/' >instagram</a>
                        <a href='/' >top</a>
                    </div>
                </div>
                <div>
                    <div className='footer-bottom'>
                        <p className='footer-bottom-left'>© 2025 All rights reserved</p>
                    </div>
                </div>





            </div>
        </div>
    )
}
