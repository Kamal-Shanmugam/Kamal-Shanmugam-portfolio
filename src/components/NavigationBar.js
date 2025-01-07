import React from 'react'
import { Link } from 'react-router-dom';
import './NavigationBar.css';
function NavigationBar() {
    return (
        <div className='NavigationBar'>
          
                <h1>Kamal S</h1>
           
            <ul className='nav-links'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Qualification">Qualification</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
               
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>

            </ul>
            <div className='nav-connect'>Connect with me</div>


        </div>
    )
}
export default NavigationBar;