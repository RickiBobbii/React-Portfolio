import React from "react";
import Project from "../components/Project";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "ChatSpace",
      description: "Forum with live chat functionality",
      technologies: "HTML, CSS, JavaScript, Socket.io, Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Heroku, JawsDB",
      githubLink: "https://github.com/RickiBobbii/ChatSpace",
      appLink: "https://quiet-ocean-06513-0d1db6ff8a7d.herokuapp.com/login",
      image: "src/assets/ChatSpace.png"

    },
    { 
      id: 2,
      name: "Project 2",
      description: "This is another project",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "#",
      appLink: "#",
    
    },
    { 
      id: 3,
      name: "Project 3",
      description: "This is a project",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "#",
      appLink: "#",
  
    },
    { 
      id: 4,
      name: "Project 4",
      description: "This is another project",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "#",
      appLink: "#",
    
    },
    { 
      id: 5,
      name: "Project 5",
      description: "This is a project",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "#",
      appLink: "#",
    
    },
    { 
      id: 6,
      name: "Project 6",
      description: "This is another project",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "#",
      appLink: "#",
  
    },
  ];
  return (
    <div>
      <Project projects={projects}/>
    </div>
  );
}
