import React from 'react';
import './Project.css';

const Projects = (props) => {
    return (
        <div className="project-card">
            <div className="img-div">
                <img src={props.imageURL} alt="" className="projectImg"></img>
                <div className="link-wrapper">
                    <a href={props.runApp} target="_blank" rel="noopener noreferrer"><button type="button">Run App</button></a>
                    <a href={props.seeCode} target="_blank" rel="noopener noreferrer"><button type="button" className="runApp">See Code</button></a>
                </div>
            </div>
            <p class="projectDesc">{props.description}</p>
        </div>
    )
}

export default Projects;
