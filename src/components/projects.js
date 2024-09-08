import React from "react";
import { Flex, VStack, Heading, Text, Button, Image, Box } from '@chakra-ui/react'
import translations from '../translations.json';
import siam from '../images/siam.png';
import meddy from '../images/meddy.png';

import { LINE_BLUE, TEXT_BLUE } from "../App";
import { TextButton } from "./defaultbutton";


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

                <Flex mb={20} flexDir={["column", "column", "row"]}>
                    <Box width={["100%", "100%", "50%"]} height='50%' pr={[0, 0, 10]} pb={[10,10,0]}>
                        <Image
                        src={meddy}
                        alt='Siam Revista example'
                        maxWidth="100%"
                        maxHeight="100%"
                        objectFit="contain"
                        borderRadius={30}
                        />
                    </Box>

                    <VStack
                        width={["100%", "100%", "50%"]} height='50%' pl={[0, 0, 10]} alignItems="left" alignSelf="center">
                        <Text fontSize="5xl" color={TEXT_BLUE} className="font-mono">
                        Meddy
                        </Text>
                        <Text fontSize='20px' color="white" className="font-rubik">
                        {getTranslation('siam-desc')}
                        </Text>
                        <Flex flexDir={'row'} gap={6}>
                        <TextButton
                            key="site"
                            onClick={() => window.open('https://trymeddy.com/', '_blank', 'noopener,noreferrer')}
                            translationKey="site"
                            language={language}
                        />
                        <TextButton
                            key="code"
                            onClick={() => window.open('https://github.com/KhromeM/meddy', '_blank', 'noopener,noreferrer')}
                            translationKey="code"
                            language={language}
                        />
                        <TextButton
                            key="code"
                            onClick={() => window.open('https://www.youtube.com/watch?v=v3aB5pym91A', '_blank', 'noopener,noreferrer')}
                            translationKey="demo-video"
                            language={language}
                        />
                        </Flex>
                    </VStack>
                    </Flex>


                <Box width='100%'>
                        <div style={{ borderTop: "1px solid #4a4d5c ", marginTop: 20, marginBottom: 20 }}></div>
                    </Box>

                    <Flex my={20} flexDir={["column-reverse", "column-reverse", "row"]}>
                        <VStack
                            width={["100%", "100%", "50%"]}
                            height='50%'
                            pr={[0, 0, 10]}
                            alignItems="left"
                            alignSelf="center"
                        >
                            <Text fontSize="5xl" color={TEXT_BLUE} className="font-mono">
                            {getTranslation('siam-news')}
                            </Text>
                            <Text fontSize='20px' color="white" className="font-rubik">
                            {getTranslation('siam-desc')}
                            </Text>
                            <Flex flexDir={'row'} gap={6}>
                            <TextButton
                                key="site"
                                onClick={() => window.open('https://www.siamrevista.com/', '_blank', 'noopener,noreferrer')}
                                translationKey="site"
                                language={language}
                            />
                            <TextButton
                                key="code"
                                onClick={() => window.open('https://github.com/VarSiv/siam-theme', '_blank', 'noopener,noreferrer')}
                                translationKey="code"
                                language={language}
                            />
                            </Flex>
                        </VStack> 
                        <Box width={["100%", "100%", "50%"]} height='50%' pl={[0, 0, 10]} pb={[10,10,0]}>
                            <Image
                            src={siam}
                            alt='Siam Revista example'
                            maxWidth="100%"
                            maxHeight="100%"
                            objectFit="contain"
                            borderRadius={30}
                            />
                        </Box>
                        </Flex>


                
                <Box width='100%'>
                        <div style={{ borderTop: "1px solid #4a4d5c ", marginTop: 20, marginBottom: 20 }}></div>
                    </Box>
            </VStack>
        </Flex>
    )
}

export default Projects;