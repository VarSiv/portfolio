import React, { useState, useRef, useEffect } from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Background from './components/background';
import Footer from './components/footer';
import theme from './theme';
import './index.css';

export const TEXT_BLUE = '#92E4FF';
export const LINE_BLUE = '#9EDCFB';

function App() {
  const [language, setLanguage] = useState('en');
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam === 'en' || langParam === 'esp') {
      setLanguage(langParam);
    }
  }, []);

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
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="transparent">
        <Container maxW="container.xl" p={10} className='lg:p-4'>
          <Navbar language={language} toggleLanguage={toggleLanguage} scrollToSection={scrollToSection} sticky="top"/>
          <Hero language={language} />
          <Skills language={language} />
          <div ref={projectsRef} className='a'>
            <Projects language={language} />
          </div>
          <div ref={contactRef}>
            <Contact language={language} />
          </div>
          <Background />
        </Container>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default App;