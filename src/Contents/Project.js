import React from 'react'
import './Project.css'
export default function Project() {
  return (
    <div>
      <div className='Project-main'>
        <h1>Project</h1>
        <div className='project-items'>
          <h2>Dairy Management System</h2>
          <p>Developed a Dairy Farm Management System that allows farm owners to efficiently manage
            dairy operations, track dairy production and manage inventory.</p>
          <ul>
            <li>
            ➢ Designed and implemented RESTful APIs using Spring Boot for handling user management
              and inventory tracking. </li>
            <li>

              ➢ Integrated MySQL database with Spring Data JPA to store data on sales, and inventory. </li>
            <li>
              ➢ Created a responsive user interface using ReactJS for state management, enabling
              seamless interaction with the back-end system </li>
            <li>
              ➢ Integrated Axios to handle API requests and manage data flow between the front-end and
              back-end. </li>
          </ul>
        </div>

      </div>
    </div>
  )
}
