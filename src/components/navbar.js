import React from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import translations from '../translations.json';
import { LINE_BLUE, TEXT_BLUE } from "../App";

export const TextButton = ({ onClick, translationKey, language, isActive }) => (
  <Button
    onClick={onClick}
    ml={0}
    size="xl"
    fontSize="lg"
    color={TEXT_BLUE}
    bg="transparent"
    fontFamily="mono"
    fontWeight="normal"
    borderColor={TEXT_BLUE}
    _hover=""
    textDecoration={isActive ? "underline" : "none"}
    textUnderlineOffset="4px"
  >
    {translations[language]?.[translationKey] || translationKey}
  </Button>
);

export const Navbar = ({ language, toggleLanguage }) => {
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
    { key: 'projects', onClick: () => {} },
    { key: 'contactMe', onClick: () => {} },
  ];

  return (
    <Box
      bg={`${LINE_BLUE}1A`}
      color="white"
      py={3}
      px={4}
      borderRadius="full"
      boxShadow="md"
      border="1px" 
      borderColor={LINE_BLUE}
      width="50%"
      w={{ base: "100%", md: "100%", lg: "50%" }}
      maxWidth="container.xl"
      mx="auto"
      my={4}
      position="relative"
      zIndex={1}
      className="mynav"
    >
      <Flex justifyContent="space-between" alignItems="center" px={8}>
        {navItems.map((item) => (
          <TextButton
            key={item.key}
            onClick={item.onClick}
            translationKey={item.key}
            language={language}
          />
        ))}
        <Flex >
          <TextButton
            onClick={toggleLanguage}
            translationKey="en"
            language={language}
            isActive={language === 'en'}
          />
          <TextButton
            onClick={toggleLanguage}
            translationKey="esp"
            language={language}
            isActive={language === 'esp'}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;