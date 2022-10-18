import React from 'react'
import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  import { Button, ButtonGroup } from '@chakra-ui/react'
  import { ChakraProvider } from '@chakra-ui/react'
  import { Icon } from '@iconify/react';
  import {Link} from 'react-router-dom'

  function Mobilenav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
    return (
      <>
      <ChakraProvider>
        <div className='pt-2 pl-4' onClick={onOpen}>
            <Icon icon="fontisto:nav-icon-grid" color="white" width="25" />
        </div>
        <Drawer placement={placement} onClose={onClose} size={"xs"} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>

            <Link to="/">
                <div>
                    <img src="images/logo.png" alt="logo" />
                </div>
            </Link>

              <Link to="/about">
                <div className='m-8'>
                    <p className='text-xl'>About</p>
                </div>
              </Link>

              <Link to="">
                <div className='m-8'>
                    <p className='text-xl'>Pricing</p>
                </div>
              </Link>

              <Link to="">
                <div className='m-8'>
                    <p className='text-xl'>Contact us</p>
                </div>
              </Link>

              <Link to="/login">
                <div className='border-2 m-8 rounded-lg p-2 w-[100px]'>
                    <p className='text-center'>Login</p>
                </div>
              </Link>

              <Link to="/payment">
                <div className='border-2 mt-4 ml-8 rounded-lg p-2 w-[100px]'>
                    <p className='text-center'>Sign up</p>
                </div>
              </Link>


            </DrawerBody>
          </DrawerContent>
        </Drawer>
        </ChakraProvider>
      </>
    )
  }
  export default Mobilenav