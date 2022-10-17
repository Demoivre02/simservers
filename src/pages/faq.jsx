import React from 'react';
import Nav from '../homecomponents/nav';
import Solutions from '../common/solutions';
import Footer from '../homecomponents/footer';
import { ChakraProvider } from '@chakra-ui/react';
import {Accordion, AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Box} from '@chakra-ui/react'
import QAarray from '../faqcomponents/q&aarray';
import Arcd from '../faqcomponents/arcd';


function FAQ(props) {
    return (
        <div>

        <div>
            <Nav/>
        </div>

        <div className='w-[70%] m-auto mt-12 mb-12 border-2 p-4 rounded-lg'>
            <ChakraProvider>
                <Accordion allowToggle>
                
                {QAarray.map((item)=>{
                    return <Arcd question={item.question} answer={item.answer} key={item.id} />
                })}
                
                </Accordion>
            </ChakraProvider>
        </div>

        <div className=' w-[50%] m-auto mb-8'>
            <p className='text-center text-2xl font-medium mb-4'>SUBSCRIBE FOR FREEBIES </p>
            <p className='text-center text-xl w-[70%] m-auto'>Drop your mail to get notified of our juicy discount rates, giveaways and updates on how to serve you better. </p>
            <div className='flex m-auto justify-center mt-8 items-center'>
                <div className='text-center'>
                    <input className='p-2 outline-noneborder-2' type="email" placeholder='david@gmail.com' />
                </div>
                <div className='ml-8'>
                    <button className='border-2 p-2 rounded-lg' type="submit">Submit</button>
                </div>
            </div>
        </div>

        <div className='w-[70%] m-auto mt-12 text-center'>
            <p className='font-medium text-xl mb-4'>WHAT NEXT?</p>
            <p className='mb-4'>Get started…</p>
            <p className='font-medium text-xl mt-4 w-[75%] leading-normal m-auto'>
                REGISTER- SUBSCRIBE- COORDINATE YOUR APIs with our assistance- DOWNLOAD
                  SIMSERVERS.IO APP- ACTIVATE YOUR ACCOUNT- ENJOY THE UNLIMITED SERVICES
            </p>
        </div>

        <div className='mt-12'>
            <Solutions/>
        </div>
        <div className='mt-12'>
            <Footer/>
        </div>
    </div>
    );
}

export default FAQ;