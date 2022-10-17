import React from 'react';
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom';

function Dashboardtopnav(props) {
    return (
        <div className='w-full border-b-2 border-[#BED0DE] p-2'>
            <div className='  flex justify-between items-center'>
                <div className='ml-16'>
                    <ul className='flex justify-between'>
                        <Link to="/about">
                             <li className='mr-4 font-medium text-sm hover:text-base transition-all text-[#171F34]'>About Us</li>
                        </Link>
                        <li className='ml-4 font-medium hover:text-base transition-all text-sm text-[#171F34]'>News</li>
                        <li className='ml-4 font-medium hover:text-base transition-all text-sm text-[#171F34]'>User Policy</li>
                    </ul>
                </div>
                <div className='flex justify-between  mr-32 '>
                    <input className='bg-[#171F34] outline-0 text-xs items-center placeholder:ml-4 placeholder:text-white rounded-full text-white p-1 pl-3'
                     type="search" name="search" id="" placeholder='Search' />
                </div>
                <div className='flex justify-content mr-16'>
                    <Icon icon="bxs:user-circle" color="#171F34" height="25" inline={true} />
                    <div className='ml-8'>
                        <Icon icon="bi:bell-fill" color="#171F34" height="25" inline={true} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboardtopnav;