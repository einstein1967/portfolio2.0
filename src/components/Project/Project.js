import React from 'react';
import './Project.css';

const projects = [
    {
        name: "Burger",
        imageURL: "./eatdaburger.jpg",
        description: "Full stack app that adds the user's input (ideally a sandwich) to a MySQL database, allows the user to 'devour' the sandwich, and then delete it",
        runApp: "https://ericjbergan.github.io/burger.github.io/",
        seeCode: "https://github.com/ericjbergan/burger.github.io"
    },
    {
        name: "Nesterly",
        imageURL: "./nesterlyimage.jpg",
        description: "Full stack app that allows you to keep track of your household goods; functions but is still a work in progress",
        runApp: "https://bootcamp-proj2.herokuapp.com/",
        seeCode: "https://github.com/ericjbergan/bootcamp-project2.github.io"
    },
    {
        name: "Gem Collector",
        imageURL: "./gemcollector.jpg",
        description: "A game for improving basic math and memory skills",
        runApp: "https://ericjbergan.github.io/crystal-collector.github.io/",
        seeCode: "https://github.com/ericjbergan/crystal-collector.github.io"
    }
];


const Projects = () => {

   
   return projects.map(card => {
        return (
            <div className="project-card">
                <div className="img-div">
                    <img src={card.imageURL} alt="" className="projectImg"></img>
                    <div className="link-wrapper">
                        <a href={card.runApp} target="_blank" rel="noopener noreferrer">
                            <button type="button">Run App</button></a>
                        <a href={card.seeCode} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="runApp">See Code</button></a>
                    </div>
                </div>
                <div className="desc-div">
                    <p className="project-desc">{card.description}</p>
                </div>
            </div>
        )
    })
}

export default Projects;
