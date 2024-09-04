import React from "react";
import { Flex, VStack, Heading, Text, Button, Image, Box } from '@chakra-ui/react'
import translations from '../translations.json';
import siam from '../images/siam.png';
import { LINE_BLUE, TEXT_BLUE } from "../App";
import { TextButton } from "./navbar";

export const Contact = ({ language }) => {


    const getTranslation = (key) => {
        return translations[language]?.[key] || key;
    };
      
    return (    
        <Flex maxW="6xl" w="full" flexDir={'row'} alignItems="center" justifyContent="space-between" mx="auto" marginTop={100}>
            <VStack width='50%' height='50%' p={10} alignItems="left" alignSelf="center">

            </VStack>
            <VStack width='50%' height='50%' p={10} alignItems="left" alignSelf="center">
                <Text fontSize={"6xl"} fontWeight={'semibold'} color="white" className="font-rubik" paddingBottom={2} marginBottom={0}>
                   { getTranslation('contact-me')}
                </Text>
                <Text fontSize='20px' color="white" className="font-rubik">{getTranslation('contact-text')}</Text>
            </VStack>
        </Flex>
    )
}

export default Contact;