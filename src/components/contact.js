import React, { useRef, useEffect } from 'react';
import { Flex, VStack, Heading, Text, Button, Image, Box } from '@chakra-ui/react'
import translations from '../translations.json';
import siam from '../images/siam.png';
import { LINE_BLUE, TEXT_BLUE } from "../App";
import { TextButton } from "./navbar";
import emailjs from '@emailjs/browser';
export const Contact = ({ language }) => {

    useEffect(() => {
        emailjs.init("V5Jrx1x7PO44Y11XH");
      }, []);

    const getTranslation = (key) => {
        return translations[language]?.[key] || key;
    };
    const sendEmail = () => {
        const templateParams = {
            // from_name: form.current.name.value,
            // from_email: form.current.email.value,
            // message: form.current.message.value,
            // to_name: 'Your Name', 
            from_name: 'me',
            from_email: 'also me',
            message: 'test msg hello world',
            to_name: 'Your Name', 
          };

        emailjs.send("service_arx73hw", "template_t9byr35", templateParams,"V5Jrx1x7PO44Y11XH",{
          to_name: "Recipient Name",
          from_name: "Your Name",
          message: "This is a test email"
        })
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });
        console.log('clicked');
      };
      
    return (    
        <Flex maxW="6xl" w="full" flexDir={'row'} alignItems="center" justifyContent="space-between" mx="auto" marginTop={100}>
            
            <VStack width='50%' height='50%' p={10} alignItems="left" alignSelf="center">
                <Button onClick={sendEmail()}>
                    Send
                </Button>
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