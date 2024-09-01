import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import translations from '../translations.json';

export const Navbar = () => {
  const [language, setLanguage] = useState('EN');
  const bgColor = useColorModeValue("blue.500", "blue.200");
  const textColor = useColorModeValue("white", "gray.800");

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'EN' ? 'ESP' : 'EN');
  };

  const getNavText = (key) => {
    return translations[language]?.[key] || key;
  };

  return (
    <Box
      bg={bgColor}
      color={textColor}
      py={2}
      px={4}
      borderRadius="full"
      boxShadow="md"
      width="50%"
      w={{ base: "100%", md: "100%", lg: "50%" }}
      maxWidth="container.xl"
      mx="auto"
      my={4}
      position="relative"
      zIndex={1}
    >
      <Flex justifyContent="space-between" alignItems="center" px={8}>
        <Text fontSize="xl" ml={2}>
          {getNavText('about')}
        </Text>
        <Text fontSize="xl" ml={2}>
          {getNavText('projects')}
        </Text>
        <Text fontSize="xl" ml={2}>
          {getNavText('contactMe')}
        </Text>
        <Button onClick={toggleLanguage} ml={4} size="sm">
          {language === 'EN' ? 'ESP' : 'EN'}
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;