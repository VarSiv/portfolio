import React, { useState, useRef } from 'react';
import './index.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

import { ChakraProvider, Box } from '@chakra-ui/react'
export const TEXT_BLUE = '#92E4FF';
export const LINE_BLUE = '#9EDCFB';

function App() {
  const [language, setLanguage] = useState('en');
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'esp' : 'en');
  };

  const scrollToSection = (sectionId) => {
    let ref;
    switch(sectionId) {
      case 'projects':
        ref = projectsRef;
        break;
      case 'contact':
        ref = contactRef;
        break;
      default:
        return;
    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="#1F2338" p={10} className='lg:p:4'>
        <Navbar language={language} toggleLanguage={toggleLanguage} scrollToSection={scrollToSection} sticky="top"/>
        <Hero language={language} />
        <Skills language={language} />
        <div ref={projectsRef}>
          <Projects language={language} />
        </div>
        <div ref={contactRef}>
          <Contact language={language} />
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default App;