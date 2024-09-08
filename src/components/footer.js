import React from 'react';
import { Box, Flex, Text, Container } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="#040418" color="white" width="100%" height="80px">
      <Container maxW="container.xl" height="100%">
        <Flex 
          justifyContent="space-between" 
          alignItems="center" 
          height="100%" 
          px={8}
        >
          <Text>© 2024</Text>
          <Text>Varvara Mironov</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;