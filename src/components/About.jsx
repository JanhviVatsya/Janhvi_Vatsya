import React from 'react'
import AboutImage from '../assets/Home.webp'
import Resume from '../assets/SDE_intern_Janhvi_86_sc (2).pdf'

const About = () => {
  return (
    <section className="min-h-screen p-10 bg-slate-800">
        <h2 className="text-3xl font-bold mb-6 text-white text-center font-playFair">About Me</h2>
        <div className='flex flex-col gap-8 lg:flex-row lg:gap-16 items-center justify-center'>
        <div className='lg:order-2'>
            <img src={AboutImage} alt='about'></img>
        </div>
        <div className='lg:order-1'>
            <p className='text-center text-xl font-lato text-gray-400 text-justify'>Hi! I'm a Developer and Information Technology enthusiast.</p>
            <p className='text-center text-xl font-lato text-gray-400 text-justify'>I'm a fast learner and am interested in exploring opportunities.</p>
            <p className='text-center text-xl font-lato text-gray-400 text-justify'>I am open to constructive feedback and am an optimistic person.</p>
            <div className='py-12'>
            <a href={Resume} download="SDE_Intern_Janhvi_Resume.pdf" className="text-white font-bold py-2 px-4 rounded bg-slate-500 hover:bg-slate-700 transition duration-300 font-lato">Download Resume</a>
            </div>
        </div>
        </div>
    </section>
  )
}

export default About