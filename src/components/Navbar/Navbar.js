import React from 'react';
import './Navbar.css';

const navbar = (props) => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={'./logo.JPG'} alt="logo" className="logo"></img>
        <div>
          <h3 className="navName">Eric Bergan</h3>
          <h2 className="navTitle">Full Stack Developer</h2>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav links">
          <li className="nav-item">
            <p className="nav-link" onClick={props.click}>About Me</p>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/ericjbergan" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/eric-bergan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href = "mailto: ericjbergan@gmail.com">Contact</a>
          </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default navbar;