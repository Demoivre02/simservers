import React from 'react';
import { useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton} from '@chakra-ui/react'


function ReusedModal({name}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
      <ChakraProvider>
        <Box textAlign={"left"}>
            <Button bgColor={"transparent"} fontWeight={"200"} textAlign={"left"} onClick={onOpen}>{name}</Button>
        </Box>
            <Modal onClose={onClose} size={"lg"} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader mt={7}>{`${name} Activation Settings (Total Traffic:0)`}</ModalHeader>
            <ModalCloseButton mb={12} />
            <Box p={5} >
            <ModalBody>
                <div className='mb-4'>
                    <p>Funding account numbers:</p>
                </div>
                <div className='mb-8'>
                    <p className='text-[#467BFB] italic'>
                    Please pay the sum of 3050 into any 
                    of the accounts listed below and indicate
                    what you are paying for.
                    Please note that failure to pay the exact
                    amount stated here will delay the crediting
                    of your bundle.
                    </p>
                </div>
                <div className='flex justify-between mb-4'>
                    <div>
                        <p className='text-[#434244] font-semibold'>Bank</p>
                        <p className='text-[#467BFB]'>Wema Bank</p>
                        <p className='text-[#467BFB]'>Rolez microfinance bank Bank</p>
                    </div>
                    <div>
                        <p className='text-[#434244] font-semibold'>Account no</p>
                        <p className='text-[#434244] italic'>7365939732</p>
                        <p className='text-[#434244] italic'>6134313143</p>
                    </div>
                </div>
                <div>
                    <p>If you have already make payment 
                       <span className='text-[#467BFB] italic'>Please click here</span> </p>
                </div>
            </ModalBody>
            </Box>
            <ModalFooter>
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </ChakraProvider>
      </>
    )
  }
  export default ReusedModal