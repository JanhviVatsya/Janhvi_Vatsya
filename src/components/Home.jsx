import React from 'react'
import Layout from './Layout'
import About from './About'
import SkillPage from './SkillPage'
import ProjectPage from './ProjectPage'
import ContactPage from './ContactPage'
import homePic from '../assets/Home.png'

const Home = () => {
  return (
    <section className='bg-slate-800'>
        <div className='flex flex-col lg:flex-row gap-10 items-center justify-center min-h-screen'>
            <div>
                <img src={homePic} alt='home' className='object-contain'></img>
            </div>
            <div className='text-white font-lato'>
                <h1 className='text-5xl text-white font-playFair'>Hi, I'm Janhvi</h1>
                <h1 className='text-5xl py-4 text-white font-playFair'>Web Developer, Freelancer</h1>
            </div>
        </div>
        <About></About>
        <SkillPage></SkillPage>
        <ProjectPage></ProjectPage>
        <ContactPage></ContactPage>
    </section>
  )
}

export default Home