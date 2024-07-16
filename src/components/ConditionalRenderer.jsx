import React from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import SkillPage from './SkillPage';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';

const ConditionalRenderer = () => {
  const location = useLocation();

  switch (location.pathname) {
    case '/about':
      return <About />;
    case '/skills':
      return <SkillPage />;
    case '/projects':
      return <ProjectPage />;
    case '/contact':
      return <ContactPage />;
    default:
      return <Home />;
  }
};

export default ConditionalRenderer;