import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';


function Delete ({name}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
      <ChakraProvider>
        <Box marginRight={4} >
            <Button bg="#FE7062" fontWeight={"200"} color="white" width="130px" onClick={onOpen}>{name}</Button>
        </Box>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <Box mt={12}>
                    <ModalHeader>Are you sure you want to Delete  this device</ModalHeader>
                </Box>
                <ModalCloseButton />
                <ModalBody pb={6}>
                
                </ModalBody>
                <div className='m-auto'> 
                    <ModalFooter>
                    <Button colorScheme='red' width="100px"  mr={3}>
                        Yes
                    </Button>
                    <Button width="100px"  onClick={onClose}>Close</Button>
                    </ModalFooter>
                </div>
            </ModalContent>
            </Modal>
        </ChakraProvider>
      </>
    )
  }
  export default Delete 