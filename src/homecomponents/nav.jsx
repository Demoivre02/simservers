import React from 'react';
import {Link} from 'react-router-dom'
import Button from '../common/button';
import Mobilenav from './drawer';


function Nav(props) {
    return (
        <div style={{background: "linear-gradient(178.18deg, #5533FF 38.36%, #4B6DDB 102.8%)"}}>
            <div className='2xl:flex xl:flex md:flex lg:flex hidden    md:justify-between justify-between xl:w-[90%] lg:w-full m-auto items-center'>
                <ul className="2xl:flex xl:flex lg:flex md:flex   justify-between" >
                    <Link to="/">   
                        <img className='max-w-full' src="images/logo.png" alt="logo" />
                    </Link> 
                </ul>
                    <div className=' flex  w-auto xl:w-[30%] lg:w-[40%] md:w-[30%]  justify-between  items-center'>
                            <Link to="/about">
                                <li className="cursor-pointer list-none md:text-base text-white lg:text-xl hover:text-2xl transition-all font-medium">About</li>
                            </Link>
                            <li className=" cursor-pointer list-none lg:text-xl md:text-base text-white text-xl hover:text-2xl transition-all font-medium"> pricing</li>
                            <li className=" cursor-pointer list-none lg:text-xl md:text-base text-white text-xl hover:text-2xl transition-all font-medium">Contact us</li>
                    </div> 
                <ul className=' flex w-[20%] mr-12 md:mr-0  justify-around '>
                    <Link to="/login">
                        <div className='xl:w-[90px] lg:w-[80px] md:w-[70px] cursor-pointer text-white hover:bg-[#fff]  pr-1 text-center border-2 border-[#fff] rounded-[12px]'>
                        <p className='text-white md:text-sm  p-2 hover:text-[#2d0e86]'>Login</p>  
                        </div>
                    </Link>
                    <Link to="/payment">
                    <div className='xl:w-[90px] lg:w-[80px] md:text-sm  md:w-[70px] cursor-pointer hover:border-2 hover:border-[#fff] pl-1 bg-[#70C6FD] text-white hover:bg-transparent  pr-1 text-center rounded-[12px]'>
                        <p className='text-white p-2 lg:text:sm hover:text-[#fff]'>Signup</p>  
                        </div>
                    </Link>
                </ul>
            </div>
            <div className='xl:hidden lg:hidden md:hidden pt-4 pb-4 sm:block'>
                <Mobilenav/>
            </div>
    </div>
    );
}

export default Nav;