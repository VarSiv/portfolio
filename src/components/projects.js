import React from "react";
import { Flex, VStack, Heading, Text, Button, Image, Box } from '@chakra-ui/react'
import translations from '../translations.json';
import javascript from '../images/javascript.png';
import flutter from '../images/flutter.png';
import cpp from '../images/cpp.png';
import python from '../images/python.png';
import { LINE_BLUE} from "../App";

const SkillCard = ({ image, altText }) => (
    <Box
        bg={`${LINE_BLUE}1A`}
        color="white"
        py={3}
        px={4}
        borderRadius={10}
        boxShadow="md"
        border="1px" 
        borderColor={LINE_BLUE}
        m={5}
      fontFamily="mono"
      fontWeight="normal"
      _hover=""
      height="200px"
      width="200px"
    >
    </Box>
  );

export const Projects = ({ language }) => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const getTranslation = (key) => {
        return translations[language]?.[key] || key;
    };
      
    return (    
        <Flex maxW="6xl" w="full" flexDir={["column", "column", "row"]} alignItems="center" justifyContent="space-between" mx="auto" marginTop={100}>
            <VStack alignItems="center" w={["full", "full", "100%"]} mb={[8, 0, 0]} pr={[0, 0, 8]} spacing={0}>
                <Text fontSize={"6xl"} fontWeight={'semibold'} color="white" className="font-rubik" paddingBottom={2}>
                    {capitalizeFirstLetter(getTranslation('projects'))}
                </Text>
                <Flex>
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                </Flex>
                <Flex>
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                </Flex>
            </VStack>
        </Flex>
    )
}

export default Projects;