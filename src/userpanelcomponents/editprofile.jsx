import React from 'react';
import { useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {FormControl,FormLabel} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton} from '@chakra-ui/react'


function Editdevice({name}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
      <ChakraProvider>
        <Button bg="#467BFB" fontWeight={"200"} color="#ffffff" onClick={onOpen}>{name}</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size={"sm"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
                <FormLabel>Device Name</FormLabel>
                <Input ref={initialRef} placeholder='' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Device Key</FormLabel>
                <Input placeholder='' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Sim Slot</FormLabel>
                <Input placeholder='Sim 1' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Sim balance</FormLabel>
                <Input placeholder='' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Device Status</FormLabel>
                <Input placeholder='Not Active' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Device Process</FormLabel>
                <Input placeholder='SMS' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Device Pin</FormLabel>
                <Input placeholder='' />
              </FormControl>

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </ChakraProvider>
      </>
    )
  }
  export default Editdevice