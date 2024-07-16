import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import navPic from '../assets/Portfolio Logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const handleNavigation = (path) => {
        navigate(path);
        scrollToTop();
    };

    return (
        <>
            <nav className="bg-slate-800 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={navPic} alt="Logo" className="h-10" />
                    </div>
                    <div className="block lg:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                    <ul className={`flex-col lg:flex-row gap-8 py-2 items-center justify-center text-white font-lato lg:flex ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
                        <li>
                            <Link to="/" className="hover:text-slate-400 transition duration-300" onClick={scrollToTop}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-slate-400 transition duration-300" onClick={scrollToTop}>About</Link>
                        </li>
                        <li>
                            <Link to="/skills" className="hover:text-slate-400 transition duration-300" onClick={scrollToTop}>Skills</Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-slate-400 transition duration-300" onClick={scrollToTop}>Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-slate-400 transition duration-300" onClick={scrollToTop}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
            <footer className='bg-slate-800'>
                <div className='flex flex-col items-center justify-center'>
                    <div>
                        <img src={navPic} alt="Logo" />
                    </div>
                    <div className='py-4'>
                        <ul className='flex flex-row gap-8 items-center justify-center text-white font-latos'>
                            <li>
                                <a href="/" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>Home</a>
                            </li>
                            <li>
                                <a href="/about" onClick={(e) => { e.preventDefault(); handleNavigation('/about'); }}>About</a>
                            </li>
                            <li>
                                <a href="/skills" onClick={(e) => { e.preventDefault(); handleNavigation('/skills'); }}>Skills</a>
                            </li>
                            <li>
                                <a href="/projects" onClick={(e) => { e.preventDefault(); handleNavigation('/projects'); }}>Projects</a>
                            </li>
                            <li>
                                <a href="/contact" onClick={(e) => { e.preventDefault(); handleNavigation('/contact'); }}>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-row gap-8 py-2 items-center justify-center text-white font-lato'>
                        <Link to='https://www.linkedin.com/in/janhvi-pandey-4335b4204/'>
                            <FaLinkedin className='hover:animate-bounce' />
                        </Link>
                        <Link to='https://www.instagram.com/janhvi_vatsya/?next=%2F'>
                            <FaInstagram className='hover:animate-bounce' />
                        </Link>
                        <Link to='https://x.com/janhvi_vatsya'>
                            <FaXTwitter className='hover:animate-bounce' />
                        </Link>
                        <Link to='https://github.com/JanhviVatsya'>
                            <FiGithub className='hover:animate-bounce' />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Layout;
