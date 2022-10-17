import React from 'react';
import Input from '../common/input';
import {Link} from 'react-router-dom'
import Button from '../common/button';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

function Signup(props) {
    return (
        <div className='grid grid-cols-2'>
            <div className='h-screen overflow-hidden '>
                <img src="images/guy2.png" alt="" />
            </div>
            <div className='W-[100%] '>
                <div className=' w-[80%] m-auto'>
                    <div className='mb-4 mt-4'>
                        <img src="images/Group.png" alt="welcome" />
                    </div>
                    <Link className='mt-12 text-xl text-[#467BFB]' to="/privacy">
                        Sign-in with the options below
                    </Link>              
                    <div className='w-24 mt-4 mb-4 flex justify-between'>
                        <img src="images/facebook-color 1.png" alt="facebook logo" />
                        <img src="images/google-color 1.png" alt=" google color" />
                    </div>
                    <hr className='w-[70%]  mb-2'/>
                    <small className='text-xl  mt-4 text-[#467BFB]'> 
                        Or use your resgistered email
                    </small>
                    <div className='w-[80%]'>
                        <Input type="text" name="Fname" placeholder="Username"/>
                        <Input type="password" name="password" placeholder="Password" />
                    </div>
                    <div className='mb-12 mt-8'>
                        <Link to="/dashboard">
                            <Button text="Sign in"  style={{background: "#467BFB", color:"White",width:"25%",textAlign:"center",borderRadius: "16px"}}/>
                        </Link>
                    </div>
            </div>
           </div>
        </div>
    );
}

export default Signup;