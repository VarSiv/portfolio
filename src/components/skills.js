import React, { useRef, useEffect } from "react";
import { Box, Text, Image, Flex, useBreakpointValue } from '@chakra-ui/react'
import translations from '../translations.json';
import javascript from '../images/javascript.png';
import tailwind from '../images/tailwind.png'
import flutter from '../images/flutter.png';
import nodejs from '../images/node.png';
import react from '../images/react.png';
import git from '../images/git.png';
import python from '../images/python.png';
import { LINE_BLUE } from "../App";
import { Tilt } from 'react-tilt';

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  speed: 500,
  transition: true,
  axis: null,
  reset: true,
  easing: "ease-out",
}

const SkillCard = ({ image, altText }) => {
  const tiltRef = useRef(null);
  const tiltInstance = useRef(null);

  useEffect(() => {
    if (tiltRef.current && !tiltInstance.current) {
      tiltInstance.current = new Tilt(tiltRef.current, defaultOptions);
    }

    // return () => {
    //   if (tiltInstance.current) {
    //     tiltInstance.current.destroy();
    //     tiltInstance.current = null;
    //   }
    // };
  }, []);

  return (
    <Box
      ref={tiltRef}
      bg={`${LINE_BLUE}1A`}
      color="white"
      borderRadius={30}
      boxShadow="md"
      border="1px" 
      borderColor={LINE_BLUE}
      fontFamily="mono"
      fontWeight="normal"
      _hover=""
      height={["140px", "160px", "180px"]}
      width={["140px", "160px", "180px"]}
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="transition-all duration-300"
    >
      <Image src={image} alt={altText} maxWidth="80%" maxHeight="80%" objectFit="contain" borderRadius={30}/>
    </Box>
  );
};

export const Skills = ({ language }) => {
  const getTranslation = (key) => {
    return translations[language]?.[key] || key;
  };
  
  const skillImages = [
    javascript, tailwind, flutter, nodejs,
    react, git, python
  ];

  const layout = useBreakpointValue({
    base: "2/2/2/1",
    md: "3/2/2",
    lg: "4/3"
  });

  const renderSkillCards = () => {
    if (layout === "4/3") {
      return (
        <>
          <Flex justifyContent="center" gap={6} flexWrap="nowrap">
            {skillImages.slice(0, 4).map((image, index) => (
              <SkillCard key={index} image={image} altText={`Skill ${index + 1}`} />
            ))}
          </Flex>
          <Flex justifyContent="center" gap={6} flexWrap="nowrap">
            {skillImages.slice(4).map((image, index) => (
              <SkillCard key={index + 4} image={image} altText={`Skill ${index + 5}`} />
            ))}
          </Flex>
        </>
      );
    } else if (layout === "3/2/2") {
      return (
        <>
          <Flex justifyContent="center" gap={6} flexWrap="nowrap">
            {skillImages.slice(0, 3).map((image, index) => (
              <SkillCard key={index} image={image} altText={`Skill ${index + 1}`} />
            ))}
          </Flex>
          <Flex justifyContent="center" gap={6} flexWrap="nowrap">
            {skillImages.slice(3, 5).map((image, index) => (
              <SkillCard key={index + 3} image={image} altText={`Skill ${index + 4}`} />
            ))}
          </Flex>
          <Flex justifyContent="center" gap={6} flexWrap="nowrap">
            {skillImages.slice(5).map((image, index) => (
              <SkillCard key={index + 5} image={image} altText={`Skill ${index + 6}`} />
            ))}
          </Flex>
        </>
      );
    } else {
      return (
        <Flex justifyContent="center" gap={6} flexWrap="wrap">
          {skillImages.map((image, index) => (
            <SkillCard key={index} image={image} altText={`Skill ${index + 1}`} />
          ))}
        </Flex>
      );
    }
  };
    
  return (    
    <Box maxW="6xl" w="full" mx="auto" mt={100} px={4}>
      <Text fontSize={"6xl"} fontWeight={'semibold'} color="white" className="font-rubik text-center mb-8">
        {getTranslation('skills')}
      </Text>
      <Flex flexDirection="column" alignItems="center" gap={6}>
        {renderSkillCards()}
      </Flex>
    </Box>
  )
}

export default Skills;