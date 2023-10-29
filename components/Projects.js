import React from 'react';

const Projects = () => {
  return (
    
    <div className='row'>
            <div className="projects">
                <h1>Projects</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Description</th>
                        <th>Tools Used</th>
                        <th>Link to Project</th>
                    </tr>
                    </thead>
                    <tbody>
                    {dummyProjects.map((project, index) => (
                        <tr key={index}>
                        <td>{project.name}</td>
                        <td>{project.year}</td>
                        <td>{project.description}</td>
                        <td>{project.toolsUsed}</td>
                        <td>
                            {
                                project.link.isLink?
                                <a href={project.link.link} target="_blank" rel="noopener noreferrer">
                                    {project.link.link} 
                                </a>
                                :
                                project.link.link
                            }
                            
                        </td>.
                        </tr>
                    ))}
                    </tbody>
                </table>
                <style jsx>{`
                    .projects {
                    padding: 20px;
                    }
                    table {
                    width: 100%;
                    border-collapse: collapse;
                    }
                    th, td {
                    padding: 8px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                    }
                    th {
                    background-color: #f2f2f2;
                    }
                    a {
                    text-decoration: none;
                    }
                `}</style>
            </div>
    </div>

  );
};

// Dummy data for projects
const dummyProjects = [
  {
    name: 'Apple Finder',
    year: '2023',
    description: 'Web Application that allows users to search for and review all online content(movies,eBooks,songs,videos, ...etc) that is avialable on the apple play store.',
    toolsUsed: 'React, Node.js, Express',
    link:{isLink:true,link:'https://buster-beans-c9b79e95e191.herokuapp.com/'} ,
  },
  {
    name: 'To do Board',
    year: '2023',
    description: 'Web application that provides authenticated users to create multiple To-Do lists, add tasks/items to each list,upadate tasks and lists and also keep track of the completion progrees of each List ',
    toolsUsed: 'React, Node.js, Express ,Mongo DB , JWT',
    link: {isLink:false,link:'Not Hosted'},
  },
  {
    name: 'Car Finder',
    year: '2023',
    description: 'Web App that serves as a management system to Create,Read,Update and Delete car info',
    toolsUsed: 'React, Node.js, Express ,Mongo DB ',
    link: {isLink:false,link:'Not Hosted'},
  },
  {
    name: 'Weather Now',
    year: '2023',
    description: 'Web App providing hourly weather feed for certain cities and provinces in South Africa',
    toolsUsed: 'React',
    link: {isLink:false,link:'Not Hosted'},
  },
];

export default Projects;
