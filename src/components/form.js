import React, { useState, useEffect } from 'react';
import { FormControl, Input, Button, Text, Box } from '@chakra-ui/react';
import { LINE_BLUE, TEXT_BLUE } from "../App";
import translations from '../translations.json';

const Form = ({ language }) => {
    const [formData, setFormData] = useState({ email: '', body: '' });
    const [alert, setAlert] = useState({ message: '', type: '' });
    const getTranslation = (key) => {
        return translations[language]?.[key] || key;
    };
    useEffect(() => {
        let timer;
        if (alert.message) {
            timer = setTimeout(() => {
                setAlert({ message: '', type: '' });
            }, 10000);
        }
        return () => clearTimeout(timer);
    }, [alert]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const isValidEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidEmail(formData.email)) {
            setAlert({ message: 'Please enter a valid email address.', type: 'error' });
        } else if (formData.body.trim() === '') {
            setAlert({ message: 'Please enter a message.', type: 'error' });
        } else {
            setAlert({ message: 'Message sent successfully!', type: 'success' });
            setFormData({ email: '', body: '' }); // Clear input boxes
        }
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