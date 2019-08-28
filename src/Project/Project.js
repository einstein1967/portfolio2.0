import React from 'react';
import './Project.css';

const Projects = (props) => {
    console.log(props);
    return (
        <div className="projectCard">
            <img src={props.imageURL} alt="" className="projectImg"></img>
            <p class="projectDesc">{props.description}</p>
                <button type="button" link to={props.runApp}>Run App</button>
                <button type="button" className="runApp" href={props.seeCode}>See Code</button>
        </div>
    )
}

export default Projects;
