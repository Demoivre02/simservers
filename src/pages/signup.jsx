import {React, useContext} from 'react';
import { UserContext } from '../common/usercontext';
import Input from '../common/input';
import {Link} from 'react-router-dom'
import Button from '../common/button';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'



function Signup(props) {
    const plantype= useContext(UserContext)

        return (
        <div className=' grid grid-cols-2'>
            <div className='h-screen'>
                <img src="images/guy.png" alt="" />
            </div>
            <div className=''>
                <div className='xl:w-[80%] ml-4 lg:w-[90%]'>
                    <div  className='mt-8'>
                        <p className='xl:w-[65%] lg:w-[70%] text-2xl'>Signup and join other users 
                        in automating their networks </p>
                    </div>
                    <div className='w-24 mt-4 mb-4 flex justify-between'>
                        <img src="images/facebook-color 1.png" alt="facebook logo" />
                        <img src="images/google-color 1.png" alt=" google color" />
                    </div>
                    <hr className='w-1/2 mb-2'/>
                    <small className='text-base  mt-4 text-[#467BFB]'> 
                        Or fill out your details
                    </small>
                    <div className='bg-[#E4E8FD] xl:w-[64%] lg:w-[57%] rounded  w-[64%] p-2 mt-4 border-gray-500 '>
                        <small className='text-base text-[#59595B]'>
                        {plantype} : N7,999
                        </small>
                    </div>
                    <div className='xl:w-[80%] lg:w-[70%]'>
                        <Input type="text" name="Fname" placeholder="First name"/>
                        <Input type="text" name="Lname" placeholder="Last name"/>
                        <Input type="email" name="email" placeholder="Email"/>
                        <Input type="text" name="username" placeholder="Desired Username"/>
                        <Input type="num" name="Pnumber" placeholder="Phone number"/>
                        <Input type="password" name="password" placeholder="Enter password" />
                        <Input type="password" name="password" placeholder="Confirm password" />
                    </div>
                    <div className='mt-8 mb-4 flex items-center m-auto'>
                        <ChakraProvider>
                        <Checkbox colorScheme='green' defaultChecked>
                        </Checkbox>
                        </ChakraProvider>
                        <span  className='text-4 ml-2'>
                            I accept the  
                            <Link className='ml-1 text-[#467BFB]' to="/termsofuse">
                                Terms of Use
                            </Link> and  
                            <Link className='ml-2 text-[#467BFB]' to="/privacy">
                                Privacy Policy
                            </Link>
                        </span>
                    </div>
                    <div className='mb-4'>
                        <Link to="/dashboard" >
                            <Button text="Create account"  style={{background: "#467BFB", color:"White",textAlign:"center",borderRadius: "16px"}}/>
                        </Link>
                    </div>
                    
                    <div>
                        Already have an account? 
                        <Link  className='ml-2 text-[#467BFB]' to="/login">Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;