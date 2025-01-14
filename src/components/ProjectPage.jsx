import React from 'react'
import Project1 from '../assets/Project 1.png';
import Project2 from '../assets/Project 2.png';
import Project3 from '../assets/Project 3.webp';
import Project4 from '../assets/Project 4.png';
import Project5 from '../assets/Project 5.jpg';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
    
    const projectData= [
        {
            name: 'Codeforces Analyser' , 
            icon: Project1, 
            description: 'A platform that allows user to analyse progress on Codeforces and improve',
            projectUrl: 'https://github.com/JanhviVatsya/codeforces_analyser'
          },
        {
            name: 'Video Calling App' ,
            icon: Project2,
            description: 'A WebRTC powered video calling application with Javascript, Express, EJS',
            projectUrl: 'https://peer2peer-video-call.vercel.app/lobby.html'
        },
        {
            name: 'Team Docs' ,
            icon: Project3,
            description: 'A collaborative document platform with live synchronization of 2 documents on different computers',
            projectUrl: 'https://github.com/JanhviVatsya/Google-Docs-Clone'
        },
        {
            name: 'Developers Essentials Store' ,
            icon: Project4,
            description: 'A responsive website with a consistent and intuitive shopping experience',
            projectUrl: 'https://github.com/JanhviVatsya/Online-Shop'
        },
        {
            name: 'Animated Gaming Website Clone' ,
            icon: Project5,
            description: 'A responsive website with a consistent and intuitive experience for game',
            projectUrl: 'https://animated-website-practice.vercel.app/'
        },
    ];

  return (
    <section className="p-10 bg-slate-800 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-white text-center font-playFair">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6">
                {projectData.map((project, index) => (
                    <div key={index} className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-full h-48 flex items-center justify-center overflow-hidden mb-4">
                            <img src={project.icon} alt={project.name} className="max-h-full max-w-full object-contain" />
                        </div>
                        <h3 className="text-xl font-lato text-gray-800 font-semibold">{project.name}</h3>
                        <p className='font-lato text-gray-600 text-center mt-2'>{project.description}</p>
                        <Link to={project.projectUrl}>
                        <button className="bg-slate-500 text-white font-bold py-2 px-4 rounded hover:bg-slate-700 transition duration-300 font-lato my-4"> View Project</button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
  )
}

export default ProjectPage