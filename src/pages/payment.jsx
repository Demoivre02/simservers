import React from 'react';
import Nav from '../homecomponents/nav';
import Plan from '../paymentcomponent/plan';
import Footer from '../homecomponents/footer';
import { Switch } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import Solutions from '../common/solutions';

function Payment(props) {
    return (
        <div>
            <div>
                <Nav/>
                <div className='text-center mt-8 mb-4'>
                    <p className='text-5xl font-medium m-auto w-[40%]'>Ready to start with simserver?</p>
                    <p className='text-xl mt-4'>
                    Getting started is very easy, choose
                    one of our simple and affordable subscription plans.</p>
                    <div className='flex justify-center mt-2 mb-2 '>
                        <p className='m-2 text-xl'>Monthly</p>
                        <div>
                        <ChakraProvider>
                            <Box m="2">
                                <Switch size='md' />
                            </Box>
                        </ChakraProvider>
                        </div>
                        <p className='m-2 text-xl'>Yearly</p>
                    </div>
                    <p className='text-xl mb-8'>Pay annually and get 2 months free</p>
                </div>
                <Plan/>
                <Solutions/>
                <Footer style={{}}/>
            </div>
        </div>
    );
}

export default Payment;