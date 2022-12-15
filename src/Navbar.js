import React from 'react'
import './App.css';
import {Flower1} from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <>

<div className='container-fluid nav_bg'>
        <div className='row'>
                <div className='col-10 mx-auto'>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink  className="navbar-brand" to="/"><Flower1/></NavLink>
    
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item"  >
          <NavLink exact className= {({ isActive }) => isActive ? 'menu-active  nav-link active' : ' nav-link active'}  aria-current="page" to="/">Home</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" href="#">Link</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className= {({ isActive }) => isActive ? 'menu-active  nav-link active' : ' nav-link active'} to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className= {({ isActive }) => isActive ? 'menu-active  nav-link active' : ' nav-link active'} to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className= {({ isActive }) => isActive ? 'menu-active  nav-link active' : ' nav-link active'} to="/service">Service</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
        </div>

    </div>
    </>
  )
}
