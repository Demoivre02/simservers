import React from 'react';
import List from './list';
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom'


function Footer({style}) {
    return (
        <>
            <div className='lg:flex  justify-between p-8'>
                <div  className='  '>
                    <img src="images/logo.png" alt="" />
                    <div style={{color: "#333333"}}  className='track-3 lg:w-[50%] md:w-[50%] w-[70%]   text-{#949BA5} xl:w-[35%] md:ml-14 text-xl'>
                    Simservers.io, a fully automated platform
                    conceived to help you automated your Recharge
                    and Data Business.
                    </div>
                </div>
                <div className='md:flex md:w-[100%] m-auto  lg:border-2 lg:border-black xl:w-[45%]  mr-8 justify-around items-center'>   
                    <List header="Useful Links" one="Services" 
                    two={<Link to="/faq">FAQ</Link>} three="Portals" four="Subscriptions" />
                    <List header="Support" one="Account"
                    two="Support Center" three="Feedback" four="Contact Us" />
                    <div className='flex flex-col'>
                        <List header="Get Our App" />
                        <div className='mt-4'>
                            <img src="images/google.png" alt="google play" />
                        </div>
                        <div className='mt-6 mb-5'>
                            <img src="images/apple.png" alt="apple play" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='sm:flex justify-between m-auto mt-8 mb-4  w-11/12'>
                <p style={{color: "#333333"}} className='sm:ml-5 text-base font-medium'>© SIMSERVERS.IO. All Rights Reserves</p>
                <div className='flex  justify-between w-[30%] sm:w-[10%] mr-6'>
                    <Icon icon="et:facebook" color="#467bfb" width="30" />
                    <Icon icon="ph:instagram-logo-thin" color="#467bfb" width="30"  />
                    <Icon icon="et:twitter" color="#467bfb" width="30" />
                </div>
            </div>
        </>
    );
}

export default Footer;