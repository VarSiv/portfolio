import React, { useState, useEffect } from 'react';
import { FormControl, Input, Button, Text, Box } from '@chakra-ui/react';
import { LINE_BLUE, TEXT_BLUE } from "../App";
import translations from '../translations.json';
import emailjs from '@emailjs/browser';

const Form = ({ language }) => {
    const [formData, setFormData] = useState({ email: '', body: '' });
    const [alert, setAlert] = useState({ message: '', type: '' });

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

        emailjs.send("service_arx73hw", "template_t9byr35", templateParams, "V5Jrx1x7PO44Y11XH")
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setAlert({ message: 'Message sent successfully!', type: 'success' });
            setFormData({ email: '', body: '' }); // Clear the form
        }, (err) => {
            console.log('FAILED...', err);
            setAlert({ message: 'Failed to send message. Please try again.', type: 'error' });
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.email || !formData.body) {
            setAlert({ message: 'Please fill in all fields.', type: 'error' });
            return;
        }

        if (!validateEmail(formData.email)) {
            setAlert({ message: 'Please enter a valid email address.', type: 'error' });
            return;
        }

        sendEmail();
    };

    return (
        <form onSubmit={handleSubmit}>
            {alert.message && (
                <Box 
                    mb={4} 
                    p={3} 
                    borderRadius="md" 
                    bg={alert.type === 'error' ? 'red.100' : 'green.100'}
                    color={alert.type === 'error' ? 'red.700' : 'green.700'}
                >
                    <Text>{alert.message}</Text>
                </Box>
            )}
            <FormControl>
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
                    className='font-rubik custom-placeholder mt-4'
                    placeholder="Enter your email" 
                />
                <Input 
                    as="textarea"
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
                    paddingTop="15px"
                    paddingBottom="10px"
                    placeholder="Type your message here"
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
                {getTranslation('send')}
            </Button>
        </form>
    );
};

export default Form;