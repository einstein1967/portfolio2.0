import React from 'react';
import './Navbar.css';

const navbar = (props) => {
const { onClick } = props;

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
            <a className="nav-link" onClick={() => onClick()}>About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/einstein1967">Github</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/eric-bergan/">LinkedIn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href = "mailto: bootcamp.ejb@gmail.com">Contact</a>
          </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default navbar;