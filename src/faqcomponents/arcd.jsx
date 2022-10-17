import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import {Accordion, AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Box} from '@chakra-ui/react'


function Arcd({question,answer}) {
  return (
    <div>
        <ChakraProvider>
        <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box className='font-medium' flex='1' textAlign='left'>
                    {question}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                {answer}
                </AccordionPanel>
            </AccordionItem>

        </ChakraProvider>
    </div>
  )
}

export default Arcd