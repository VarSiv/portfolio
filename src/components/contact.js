import React, { useRef, useEffect, useState } from 'react';

import { Flex, VStack, Heading, Text, Button, Image, Box,  
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input} from '@chakra-ui/react';

import translations from '../translations.json';
import siam from '../images/siam.png';
import { TextButton } from "./navbar";
import emailjs from '@emailjs/browser';
import Form from './form';

export const Contact = ({ language }) => {
    const [formData, setFormData] = useState({ email: '', body: '' });
    useEffect(() => {
        emailjs.init("V5Jrx1x7PO44Y11XH");
      }, []);

    const getTranslation = (key) => {
        return translations[language]?.[key] || key;
    };

      
    return (    
        <Flex maxW="6xl" w="full" flexDir={["column-reverse", "column-reverse", "row"]} alignItems="center" justifyContent="space-between" mx="auto" marginTop={[50,50,100]} marginBottom={100}>
            
            <VStack  width={["100%", "100%", "50%"]} height='50%' pr={10} alignItems="left" alignSelf="center">
                <Form language={language}/>
            </VStack>
            <VStack  width={["100%", "100%", "50%"]} height='50%' p={[0,0,10]} alignItems="left" alignSelf="center" paddingBottom={[10,10,20]}>
                <Text fontSize={"6xl"} fontWeight={'semibold'} color="white" className="font-rubik" paddingBottom={2} marginBottom={0}>
                   { getTranslation('contact-me')}
                </Text>
                <Text fontSize='20px' color="white" className="font-rubik">{getTranslation('contact-text')}</Text>
            </VStack>
        </Flex>
    )
}

export default Contact;