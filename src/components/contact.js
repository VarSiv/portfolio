import React, { useRef, useEffect, useState } from 'react';

import { Flex, VStack, Heading, Text, Button, Image, Box,  
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input} from '@chakra-ui/react';

import translations from '../translations.json';
import siam from '../images/siam.png';
import { LINE_BLUE, TEXT_BLUE } from "../App";
import { TextButton } from "./navbar";
import emailjs from '@emailjs/browser';


export const Contact = ({ language }) => {
    const [formData, setFormData] = useState({ email: '', body: '' });
    useEffect(() => {
        emailjs.init("V5Jrx1x7PO44Y11XH");
      }, []);

    const getTranslation = (key) => {
        return translations[language]?.[key] || key;
    };

    const sendEmail = () => {
        const templateParams = {
            from_name: formData.email,
            from_email: formData.email,
            message: formData.body,
            to_name: 'Your Name', 
        };

        emailjs.send("service_arx73hw", "template_t9byr35", templateParams,"V5Jrx1x7PO44Y11XH")
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });
    };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
    };
      
    return (    
        <Flex maxW="6xl" w="full" flexDir={["column-reverse", "column-reverse", "row"]} alignItems="center" justifyContent="space-between" mx="auto" marginTop={[50,50,100]} marginBottom={100}>
            
            <VStack  width={["100%", "100%", "50%"]} height='50%' pr={10} alignItems="left" alignSelf="center">
                <form onSubmit={handleSubmit}>
                <FormControl >
                    <Input 
                        borderRadius='full'
                        type='email' 
                        name='email' 
                        value={formData.email} 
                        onChange={handleInputChange}
                        color="white"
                        mb={4}
                        bg={`${LINE_BLUE}1A`}
                        boxShadow="md"
                        border="1px" 
                        borderColor={LINE_BLUE}
                        className='font-rubik'
                        
                    />
                    <Input 
                        borderRadius='30px'
                        minHeight="200px"
                        type='text' 
                        name='body' 
                        value={formData.body} 
                        onChange={handleInputChange}
                        color="white"
                        mb={4}
                        bg={`${LINE_BLUE}1A`}
                        boxShadow="md"
                        border="1px" 
                        borderColor={LINE_BLUE}
                        className='font-rubik'
                    />
                </FormControl>

                <Button 
                    type="submit" 
                    bg='transparent' 
                    color={TEXT_BLUE} 
                    className='font-mono' 
                    fontWeight='regular' 
                    _hover='none' 
                    fontSize='lg'
                    boxShadow="md"
                    border="1px" 
                    borderColor={LINE_BLUE}
                >
                    send
                </Button>
                </form>
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