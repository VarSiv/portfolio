import React from "react";
import { Flex, VStack, Heading, Text, Button, Image, Box } from '@chakra-ui/react'
import translations from '../translations.json';
import siam from '../images/siam.png';
import { LINE_BLUE, TEXT_BLUE } from "../App";
import { TextButton } from "./navbar";


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
                <Text fontSize={"6xl"} fontWeight={'semibold'} color="white" className="font-rubik" paddingBottom={2} marginBottom={10}>
                    {capitalizeFirstLetter(getTranslation('projects'))}
                </Text>

                <Flex>
                    <VStack width='50%' height='50%' pr={10} alignItems="left" alignSelf="center"> 
                        <Text fontSize="5xl" color={TEXT_BLUE} className="font-mono">{getTranslation('siam-news')}</Text>
                        <Text fontSize='20px' color="white" className="font-rubik">{getTranslation('siam-desc')}</Text>
                        <Flex>
                            <TextButton 
                                key="site"
                                onClick={() => {}}
                                translationKey="site"
                                language={language}
                            />
                            <TextButton 
                                key="code"
                                onClick={() => {}}
                                translationKey="code"
                                language={language}
                            />
                        </Flex>
                    </VStack>
                    <Box width='50%' height='50%' pl={10}>
                        <Image src={siam} alt='Siam Revista example' maxWidth="100%" maxHeight="100%" objectFit="contain" borderRadius={30}/>
                    </Box>
                </Flex>

            </VStack>
        </Flex>
    )
}

export default Projects;