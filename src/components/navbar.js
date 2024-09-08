import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
} from "@chakra-ui/react";
import { LINE_BLUE, TEXT_BLUE } from "../App";
import { TextButton } from './defaultbutton';

export const Navbar = ({ 
  language, 
  toggleLanguage, 
  scrollToSection,
  bgColor = '#3D4D64A0',
  textColor = 'white',
  borderColor = LINE_BLUE,
  mobileBreakpoint = 768,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobileBreakpoint);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileBreakpoint]);

  const handleDownload = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/Brian_Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Varvara_Mironov_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { key: 'resume', onClick: handleDownload },
    { key: 'projects', onClick: () => scrollToSection('projects')},
    { key: 'contact', onClick: () => scrollToSection('contact')},
  ];

  const NavContent = () => (
    <>
      {navItems.map((item) => {
        // Only render 'resume' button on mobile, render all on desktop
        if (!isMobile || item.key === 'resume') {
          return (
            <TextButton
              key={item.key}
              onClick={item.onClick}
              translationKey={item.key}
              language={language}
              color={textColor}
            />
          );
        }
        return null;
      })}
      <Flex gap={4}>
        <TextButton
          onClick={toggleLanguage}
          translationKey="en"
          language={language}
          isActive={language === 'en'}
          color={textColor}
        />
        <TextButton
          onClick={toggleLanguage}
          translationKey="esp"
          language={language}
          isActive={language === 'esp'}
          color={textColor}
        />
      </Flex>
    </>
  );

  return (
    <Box
      bg={bgColor}
      color={textColor}
      py={3}
      px={4}
      borderRadius="full"
      boxShadow="md"
      border="1px" 
      borderColor={borderColor}
      width={isMobile ? "90%" : "50%"}
      maxWidth="container.xl"
      mx="auto"
      my={4}
      position="relative"
      zIndex={1}
      sx={{ position: 'sticky', top: 10 }}
    >
      <Flex 
        justifyContent="space-between" 
        alignItems="center" 
        px={isMobile ? 4 : 8}
        flexDirection={"row"}
      >
        <NavContent />
      </Flex>
    </Box>
  );
};

export default Navbar;