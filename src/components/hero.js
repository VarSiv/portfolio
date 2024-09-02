import React from "react";
import { Flex, VStack, Heading, Text, Button, Image, Box } from '@chakra-ui/react'
import translations from '../translations.json';
import placeholderPfp from '../images/hypergirl.png';

export const Hero = ({ language }) => {
    const handleDownload = () => {
        const pdfUrl = process.env.PUBLIC_URL + '/Brian_Resume.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Varvara_Mironov_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const getTranslation = (key) => {
        return translations[language]?.[key] || key;
    };
      
    return (    
        <Flex maxW="6xl" w="full" flexDir={["column", "column", "row"]} alignItems="center" justifyContent="space-between" mx="auto" paddingTop={20}>
            <VStack alignItems="flex-start" w={["full", "full", "50%"]} mb={[8, 8, 0]} pr={[0, 0, 8]} spacing={6}>
                <Heading as="h1" size="2xl" color="white" className="font-rubik">{getTranslation('heroHeading')}</Heading>
                <Text fontSize="xl" color="white" className="font-rubik">{getTranslation('heroSubheading')}</Text>
                <Button 
                    colorScheme="blue" 
                    size="lg" 
                    borderRadius="full"
                    onClick={handleDownload}
                >
                    {getTranslation('resumeButton')}
                </Button>
            </VStack>
            <Flex w={["full", "full", "50%"]} justifyContent={["center", "center", "flex-end"]}>
                <Box w="5/6" h="5/6">
                    <Image
                        src={placeholderPfp}
                        borderRadius="20px"
                        objectFit="cover"
                        w="full"
                        h="full"
                        alt={getTranslation('heroImageAlt')}
                    />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Hero;