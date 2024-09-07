import React, { useRef, useEffect } from "react";
import { Flex, VStack, Text, Image, Box } from '@chakra-ui/react'
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
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	speed:          500,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "ease-out",    // Easing on enter/exit.
}
const SkillCard = ({ image, altText }) => (
    <Tilt options={defaultOptions} style={{ color:'rgba(0,0,0,0)'}} >
    <Box
        bg={`${LINE_BLUE}1A`}
        color="white"
        py={3}
        px={4}
        borderRadius={30}
        boxShadow="md"
        border="1px" 
        borderColor={LINE_BLUE}
        m={5}
        fontFamily="mono"
        fontWeight="normal"
        _hover=""
        height="180px"
        width="180px"
        display="flex"
        justifyContent="center"
        alignItems="center"

    >
        <Image src={image} alt={altText} maxWidth="100%" maxHeight="100%" objectFit="contain" borderRadius={30}/>
    </Box>
    </Tilt>
);

export const Skills = ({ language }) => {
    const getTranslation = (key) => {
        return translations[language]?.[key] || key;
    };
    
    const skillImages = [
        javascript, tailwind, flutter, nodejs,
        react, git, python
    ];
      
    return (    
        <Flex maxW="6xl" w="full" flexDir={["column", "column", "row"]} alignItems="center" justifyContent="space-between" mx="auto" marginTop={100}>
            <VStack alignItems="center" w={["full", "full", "100%"]} mb={[8, 0, 0]} pr={[0, 0, 8]} spacing={0}>
                <Text fontSize={"6xl"} fontWeight={'semibold'} color="white" className="font-rubik" paddingBottom={7}>
                    {getTranslation('skills')}
                </Text>
                <Flex>
                    {skillImages.slice(0, 4).map((image, index) => (
                        <SkillCard key={index} image={image} altText={`Skill ${index + 1}`} />
                    ))}
                </Flex>
                <Flex>
                    {skillImages.slice(4).map((image, index) => (
                        <SkillCard key={index + 4} image={image} altText={`Skill ${index + 5}`} />
                    ))}
                </Flex>
            </VStack>
        </Flex>
    )
}
export default Skills;