import React from 'react';
import { useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {FormControl,FormLabel} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton} from '@chakra-ui/react'


function Addcredit({name}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
      <ChakraProvider>
        <Box ml={4}>
            <Button bg="#467BFB" fontWeight={"200"} color="#ffffff" onClick={onOpen}>{name}</Button>
        </Box>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size={"sm"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel> Amount</FormLabel>
                <Input ref={initialRef} placeholder='' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Enter Pin</FormLabel>
                <Input placeholder='' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Add credit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </ChakraProvider>
      </>
    )
  }
  export default Addcredit