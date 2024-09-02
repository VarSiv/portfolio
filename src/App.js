import React, { useState } from 'react';
import './index.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import { ChakraProvider, Box } from '@chakra-ui/react'

function App() {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'EN' ? 'ESP' : 'EN');
  };

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="gray.900" p={4}>
        <Navbar language={language} toggleLanguage={toggleLanguage} />
        <Hero language={language} />
        <Skills language={language}/>
      </Box>
    </ChakraProvider>
  );
}

export default App;