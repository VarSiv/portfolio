import React from 'react';
import './index.css';
import placeholderPfp from './images/hypergirl.png';
import Navbar from './components/navbar';
import { ChakraProvider, Box, Flex, VStack, Heading, Text, Button, Image } from '@chakra-ui/react'

function App() {
  const handleDownload = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/Brian_Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Varvara_Mironov_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="gray.900" p={4}>
        <Navbar />
        <Flex maxW="6xl" w="full" flexDir={["column", "column", "row"]} alignItems="center" justifyContent="space-between" mx="auto">
          <VStack alignItems="flex-start" w={["full", "full", "50%"]} mb={[8, 8, 0]} pr={[0, 0, 8]} spacing={6}>
            <Heading as="h1" size="2xl" color="white">I'm Varvara Mironov</Heading>
            <Text fontSize="xl" color="white">A front end developer crafting mobile and web experiences</Text>
            <Button 
              colorScheme="blue" 
              size="lg" 
              borderRadius="full"
              onClick={handleDownload}
            >
              My Resume
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
                alt="Varvara Mironov"
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;