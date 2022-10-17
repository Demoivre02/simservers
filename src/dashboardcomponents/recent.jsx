import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { Icon } from '@iconify/react';
import recentarr from './recentarr';

function Recent({name,type,amount,time,status,phone, showbody}) {
    function showbody(){
        console.log(name,type,amount,time,status,phone);
    }

    return (
        <div onClick={showbody} className='flex hover:bg-[#fff] hover:rounded-lg   justify-between items-center p-0.5 mt-2'>
           <div className='p-5  ml-8 rounded-full bg-[#D9D9D9]'></div>
           <div className=' w-[5%] text-left'>
            <p>{name}</p>
           </div>
            
            <div className=' w-[12%] '>
                <p className='' >{type}</p>
            </div>
            <div className='w-[5%] text-left '>
                <p>{amount}</p>
            </div>
            <div  className='w-[12%] text-left'>
                <p>{phone}</p>
            </div>
            <div className='w-[10%] '>
                <p>{time}</p>
            </div>  
            {(status= "Successful")?
            <p className='text-[#16C098]'>{status}</p>:
            <p className='text-[#ff0000]'>{status}</p>
            }
            <Link to="/">
                <Icon icon="ep:arrow-right-bold" color="#1a2b88" width="20" inline={true} />
            </Link>
        </div>
    );
}

export default Recent;