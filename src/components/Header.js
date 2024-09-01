/*This component displays the navigation bar at the top of the page,
with links to the "Watch List", "Watched" and "Add" pages.*/
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <div className = "container">
        <div className = "inner-content">
          <div className = "brand">
            <Link to="/">Watch List</Link>
          </div>
          <ul className = "nav-links">
            <li>
              <Link to="/">Watch List</Link> 
            </li>
            <li>
              <Link to="/watched">Watched</Link> 
            </li>
            <li>
              <Link to="/add" className='btn'>+ Add</Link> 
            </li>
          </ul>
          
        </div>
      </div>
    </header>
  )
}
