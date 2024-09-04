import React, { useState } from 'react';
import './index.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';
import { ChakraProvider, Box } from '@chakra-ui/react'
export const TEXT_BLUE = '#92E4FF';
export const LINE_BLUE = '#9EDCFB';
function App() {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'EN' ? 'ESP' : 'EN');
  };

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="#1F2338" p={4}>
        <Navbar language={language} toggleLanguage={toggleLanguage} />
        <Hero language={language} />
        <Skills language={language}/>
        <Projects language={language}/>
      </Box>
    </ChakraProvider>
  );
}

export default App;