import React from 'react';
import './Project.css';

const Projects = (props) => {
    return (
        <div className="projectCard">
            <img src={props.imageURL} alt="" className="projectImg"></img>
            <p class="projectDesc">{props.description}</p>
            <a href={props.runApp} target="_blank"><button type="button">Run App</button></a>
            <a href={props.seeCode} target="_blank"><button type="button" className="runApp">See Code</button></a>
        </div>
    )
}

export default Projects;
