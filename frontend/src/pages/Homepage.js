import React from 'react'
import{ Box, Container, Text } from "@chakra-ui/react";
import{  Tab, TabList, TabPanel, TabPanels, Tabs, } from "@chakra-ui/react";
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';

const Homepage = () => {
  return (
    <Container maxW='xl' centerContent>
        <Box
        d="flex"
        justifyContent={'center'}
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        >
            <Text align={'center'} fontSize={'4xl'} fontFamily={'Work sans'} color={'black'}>NextText</Text>
        </Box>
        <Box bg={'whiteAlpha.900'} w="100%" p={4} borderRadius="lg" color={'black'} borderWidth={"1px"}>
            <Tabs isFitted variant='soft-rounded' colorScheme={'purple'}>
            <TabList mb='1em'>
                <Tab>Login</Tab>
                <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Login />
                </TabPanel>
                <TabPanel>
                    <Signup/>
                </TabPanel>
            </TabPanels>
            </Tabs>
        </Box>
    </Container>
  )
};

export default Homepage
