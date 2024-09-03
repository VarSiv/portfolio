import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import translations from '../translations.json';
import { ACCENT_BLUE, LINE_BLUE, TEXT_BLUE } from "../App";

export const Navbar = ({ language, toggleLanguage }) => {
  const bgColor = useColorModeValue("blue.500", "blue.200");
  const textColor = useColorModeValue("white", "gray.800");

  const getTranslation = (key) => {
    return translations[language]?.[key] || key;
  };
  const handleDownload = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/Brian_Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Varvara_Mironov_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <Box
      bg={`${LINE_BLUE}1A`}
      color={"white"}
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
    >
      <Flex justifyContent="space-between" alignItems="center" px={8}>
      <Button
          onClick={handleDownload}
          ml={4}
          size="xl"
          fontSize={"lg"}
          color={TEXT_BLUE}
          bg="transparent"
          fontFamily="mono"
          fontWeight="normal"
          borderColor={TEXT_BLUE}
          _hover=''
        >
          {getTranslation('resume')}
        </Button>
        <Button
          //onClick={toggleLanguage}
          ml={4}
          size="xl"
          fontSize={"lg"}
          color={TEXT_BLUE}
          bg="transparent"
          fontFamily="mono"
          fontWeight="normal"
          borderColor={TEXT_BLUE}
          _hover=''
        >
          {getTranslation('projects')}
        </Button>
        <Button
          //onClick={toggleLanguage}
          ml={4}
          size="xl"
          fontSize={"lg"}
          color={TEXT_BLUE}
          bg="transparent"
          fontFamily="mono"
          fontWeight="normal"
          borderColor={TEXT_BLUE}
          _hover=''
        >
          {getTranslation('contactMe')}
        </Button>
        <Button
          onClick={toggleLanguage}
          ml={4}
          size="xl"
          fontSize={"lg"}
          color={TEXT_BLUE}
          bg="transparent"
          fontFamily="mono"
          fontWeight="normal"
          borderColor={TEXT_BLUE}
          _hover=''
        >
          en esp
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;