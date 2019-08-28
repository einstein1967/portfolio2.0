import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Project from './Project/Project'

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
  },
];

class App extends Component {
  state = {
    isAboutMe: true
  }

  switchAboutMe = () => {
    //update state
    console.log('I was clicked');
    this.setState({
      isAboutMe: false
    })
  }

  render() {
    return (
      <div className="App container">
        <Navbar onClick={this.switchAboutMe}
        />
        <div id="body">
          {this.state.isAboutMe ?
            <div>
              <h1>Hi, I'm Eric; Full Stack Developer</h1>
              <h1>from Minneapolis/St. Paul, MN</h1>
            </div>
            :
            <div>
              <img src="./profile-pic.jpg" alt="pic" className="profile"></img>
              <p>After some time in the medical and donation industries, I decided to take on a new challenge. Coding is something that has always been an interest for me so web development was a logical next step.</p>

              <p>I am one month out from completing certification from the University of MN Coding Bootcamp where I have learned React.js, MongoDB, MySQL, and many other programming languages and applications.</p>

              <p>I am friendly, open, intelligent and love a good challenge. I’m excited about the prospect of going into a job where I can build web applications that fill a need. I want to continue to learn and grow my coding skills to the point where I can teach and mentor other new full stack developers through projects.</p>
            </div>
          }
        </div>
        <div className="row">
          <div className="col-md-4">
            <Project
              imageURL={projects[0].imageURL}
              description={projects[0].description}
              runApp={projects[0].runApp}
              seeCode={projects[0].seeCode}
            />
          </div>
          <div className="col-md-4">
            <Project
              imageURL={projects[1].imageURL}
              description={projects[1].description}
              runApp={projects[1].runApp}
              seeCode={projects[1].seeCode}
            />
          </div>
          <div className="col-md-4">
            <Project
              imageURL={projects[2].imageURL}
              description={projects[2].description}
              runApp={projects[2].runApp}
              seeCode={projects[2].seeCode}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
