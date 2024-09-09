import React from "react";
import { Flex, VStack, Heading, Text, Button, Image, Box, Link, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import translations from '../translations.json';
import pfp from '../images/pfp.jpeg';
import { TEXT_BLUE } from "../App";

export const Hero = ({ language }) => {

    const getTranslation = (key) => {
        return translations[language]?.[key] || key;
    };
      
    return (    
        <Flex maxW="6xl" w="full" flexDir={["column", "column", "row"]} alignItems="center" justifyContent="space-between" mx="auto" paddingTop={20}>
            <VStack alignItems="flex-start" w={["full", "full", "50%"]} mb={[8, 8, 0]} pr={[0, 0, 8]} spacing={2}>

                <Text fontSize="xl" color={TEXT_BLUE} className="font-mono">{getTranslation('myname')}</Text>

                <Text fontSize={"6xl"} fontWeight={'semibold'} color="white" className="font-rubik" paddingBottom={2}>
                    Varvara Mironov
                </Text>

                <Text fontSize="xl" color="white" className="font-rubik">{getTranslation('heroSubheading')}</Text>

                {/* Social Icons */}
                <Flex pt={4} gap={4}>
                    <Link href="https://github.com/your-github-username" isExternal>
                        <IconButton 
                            aria-label="GitHub Profile" 
                            icon={<FaGithub />} 
                            variant="ghost"  // Changed to 'ghost'
                            color="white"
                            opacity={0.8} 
                            _hover={{ color: TEXT_BLUE }}
                        />
                    </Link>
                    <Link href="https://linkedin.com/in/your-linkedin-username" isExternal>
                        <IconButton 
                            aria-label="LinkedIn Profile" 
                            icon={<FaLinkedin />} 
                            variant="ghost"  // Changed to 'ghost'
                            color="white"
                            opacity={0.8} 
                            _hover={{ color: TEXT_BLUE }}
                        />
                    </Link>
                </Flex>


            </VStack>
            <Flex w={["full", "full", "50%"]} justifyContent={["center", "center", "flex-end"]}>
                <Box w="5/6" h="5/6">
                    <Image
                        src={pfp}
                        borderRadius="20px"
                        objectFit="cover"
                        w="full"
                        h="full"
                        alt={getTranslation('heroImageAlt')}
                    />
                </Box>
            </Flex>
        </Flex>
    );
}

export default Hero;
