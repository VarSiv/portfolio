import React from "react";
import { Flex, VStack, Heading, Text, Button, Image, Box } from '@chakra-ui/react'
import translations from '../translations.json';
import javascript from '../images/javascript.png';
import flutter from '../images/flutter.png';
import cpp from '../images/cpp.png';
import python from '../images/python.png';



export const Skills = ({ language }) => {


    const getTranslation = (key) => {
        return translations[language]?.[key] || key;
    };
      
    return (    
        <Flex maxW="6xl" w="full" flexDir={["column", "column", "row"]} alignItems="center" justifyContent="space-between" mx="auto" paddingTop={20}>
            <VStack alignItems="flex-start" w={["full", "full", "100%"]} mb={[8, 8, 0]} pr={[0, 0, 8]} spacing={6}>
                <Heading as="h1" size="xl" color="white">{getTranslation('languages')}</Heading>
                <Flex>
                    <Box >
                        <Image
                            src={javascript}
                            borderRadius="20px"
                            objectFit="cover"
                            w="full"
                            h="full"
                            alt="javascript"
                        />
                    </Box>
                    <Box >
                        <Image
                            src={flutter}
                            borderRadius="20px"
                            objectFit="cover"
                            w="full"
                            h="full"
                            alt="flutter"
                        />
                    </Box>
                    <Box >
                        <Image
                            src={cpp}
                            borderRadius="20px"
                            objectFit="cover"
                            w="full"
                            h="full"
                            alt="c plus plus"
                        />
                    </Box>
                    <Box >
                        <Image
                            src={python}
                            borderRadius="20px"
                            objectFit="cover"
                            w="full"
                            h="full"
                            alt="python"
                        />
                    </Box>
                </Flex>
            </VStack>
        </Flex>
    )
}

export default Skills;