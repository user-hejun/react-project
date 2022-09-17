import React from 'react'
import { Link } from 'react-router-dom'

function About () {
  return (
    <div>
      about page
      <ul>
        <li>
          <Link to="/about/detail/1">用户1</Link>
         
        </li>
        <li>
          <Link to="/about/detail/2">用户2</Link>
        </li>
        <li>
          <Link to="/about/detail/3">用户3</Link>
        </li>
        <li>
          <Link to="/about/detail/4">用户4</Link>
        </li>
      </ul>
    </div>
  )
}

export default About
