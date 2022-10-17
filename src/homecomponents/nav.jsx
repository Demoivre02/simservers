import React from 'react';
import {Link} from 'react-router-dom'
import Button from '../common/button';

function Nav(props) {
    return (
        <div style={{background: "linear-gradient(178.18deg, #5533FF 38.36%, #4B6DDB 102.8%)"}}>
        <div className='flex justify-between w-[90%] m-auto items-center'>
            <ul className="flex  w-[60%] justify-between" >
                <Link to="/">   
                    <img className='' src="images/logo.png" alt="logo" />
                </Link>
                    <div className=' flex w-2/5 ml-16  justify-between  items-center'>
                        <Link to="/about">
                            <li className="cursor-pointer text-white text-xl hover:text-2xl transition-all font-medium">About</li>
                        </Link>
                        <li className=" cursor-pointer text-white text-xl hover:text-2xl transition-all font-medium"> pricing</li>
                        <li className=" cursor-pointer text-white text-xl hover:text-2xl transition-all font-medium">Contact us</li>
                    </div>  
            </ul>
            <ul className=' flex w-[20%] mr-12  justify-around '>
                <Link to="/login">
                    <div className='w-[90px] cursor-pointer text-white hover:bg-[#fff]  pr-1 text-center border-2 border-[#fff] rounded-[12px]'>
                    <p className='text-white p-2 hover:text-[#2d0e86]'>Login</p>  
                    </div>
                </Link>
                <Link to="/payment">
                <div className='w-[90px] cursor-pointer hover:border-2 hover:border-[#fff] pl-1 bg-[#70C6FD] text-white hover:bg-transparent  pr-1 text-center rounded-[12px]'>
                    <p className='text-white p-2 hover:text-[#fff]'>Signup</p>  
                    </div>
                </Link>
            </ul>
        </div>
    </div>
    );
}

export default Nav;