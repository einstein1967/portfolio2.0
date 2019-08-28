import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Project from './Project/Project'

const projects = [
  {
    name: "Burger",
    imageURL: "./images/burger.jpg",
    description: "Full stack app that adds the user's input (ideally a sandwich) to a MySQL database, allows the user to 'devour' the sandwich, and then delete it",
    runApp: "https://einstein1967.github.io/burger.github.io/",
    seeCode: "https://github.com/einstein1967/burger.github.io"
  },
  {
    name: "Nesterly",
    imageURL: "./images/nesterly.jpg",
    description: "Full stack app that allows you to keep track of your household goods; functions but is still a work in progress",
    runApp: "https://bootcamp-proj2.herokuapp.com/",
    seeCode: "https://github.com/einstein1967/bootcamp-project2.github.io"
  },
  {
    name: "Gem Collector",
    imageURL: "./images/gems.jpg",
    description: "A game for improving basic math and memory skills",
    runApp: "https://einstein1967.github.io/crystal-collector.github.io/",
    seeCode: "https://github.com/einstein1967/crystal-collector.github.io"
  },
];

class App extends Component {
state = {
 isAboutMe: false
}

switchAboutMe = () => {
  //update state
  console.log('I was clicked');
  this.setState({
    isAboutMe: true
  })
}

  render() {
    return (
      <div className="App container">
        <Navbar 
          onClick={this.switchAboutMe} 
          />
        <div id="body">
          {this.state.isAboutMe ? 
          <h1>Hi, I'm Eric; Full Stack Developer</h1>
          //<h1>from Minneapolis/St. Paul, MN</h1>
          :
          <h1>THIS IS WORKING!!!!</h1>
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
