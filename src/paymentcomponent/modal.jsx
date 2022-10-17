import React from 'react';
import { useDisclosure } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react';
import styles from "./modal.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Signup from '../pages/signup';
import { UserContext } from '../common/usercontext';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton} from '@chakra-ui/react'

function Modalcomponent({text}) {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
      <>
      <ChakraProvider>
        <Box mt={5} color="#4135F3">
            <Button onClick={()=>{
              onOpen()
            }}>{text}</Button>
        </Box>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                <div className={styles.title}>
                    MTN GIFTING CLOUD Activation Settings (Total Traffic: 0)
                </div>
                
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                    <div className={styles.funding}>
                        Funding account numbers:
                    </div>
                    <div className={styles.note}>
                        Please pay the sum of 3050 into any of the accounts listed below.
                        Please note that failure to pay the exact amount stated here will 
                        delay the crediting of your bundle
                    </div>
                    <div className={styles.flex}>
                        <div className={styles.bank}>
                            <div > Bank</div>
                            <div className={styles.bankitem}>Wema Bank</div>
                            <div className={styles.bankitem}>Rolez Microfinance Bank</div>
                        </div>
                        <div className={styles.account}>
                            <div className={styles.top}> Account no</div>
                            <div>7365939732</div>
                            <div>6134313143</div>
                        </div>
                    </div>
                    <div>
                        If you have already make payment 
                        <span className={styles.span}> Please click here </span> 
                    </div>
                    <Link to="/signup">
                        <button className={styles.btn}>
                            proceed to signup
                        </button>
                    </Link>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </ChakraProvider>
      </>
    )
  }

export default Modalcomponent;