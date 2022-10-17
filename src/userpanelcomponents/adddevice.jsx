import React from 'react';
import { useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {FormControl,FormLabel} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton} from '@chakra-ui/react'

function Adddevice({name}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
      <ChakraProvider>
        <Box marginRight={4}>
            <Button color="#ffffff" fontWeight={"200"} bgColor="#20B45B" onClick={onOpen}>{name}</Button>
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
            <Box mt={4}>
                <ModalCloseButton />
            </Box>
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
              <Button onClick={()=>onClose()} colorScheme='blue' mr={3}>
                Add new device
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </ChakraProvider>
      </>
    )
  }
  export default Adddevice