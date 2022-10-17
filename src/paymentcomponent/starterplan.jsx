import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { useState, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import Modal from './modal';


const list=[
    {
        id: 1,
        content: "All Networks" 
    },
    {
        id: 2,
        content: "Data Gifting" 
    },
    {
        id: 3,
        content: "Corprate Gifting" 
    },
    {
        id: 4,
        content: "SSME Data" 
    },
    {
        id: 5,
        content: "VTU/Momo Airtime" 
    },
    {
        id: 6,
        content: "Share & Sell" 
    },
    {
        id: 7,
        content: "Sim Management" 
    },
    {
        id: 8,
        content: "Device Management" 
    },
    {
        id: 9,
        content: "USSD/SMS Management" 
    },
    {
        id: 10,
        content: "Sales Analysis" 
    },
    {
        id: 11,
        content: "Bulk Data" 
    },
    {
        id: 12,
        content: "Realtime response" 
    },
    {
        id: 13,
        content: "Secure API" 
    },
    {
        id: 14,
        content: "Webhook/Callback" 
    },
    {
        id: 15,
        content: "Support" 
    },
    {
        id: 16,
        content: "Cost per CG API Call (N1.00)" 
    },
    {
        id: 17,
        content: "Number of devices (10)" 
    },
    {
        id: 18,
        content: "Device setup fee (2000)" 
    },
    {
        id: 19,
        content: "CG set up fee (N10000)" 
    },
]

function Starterplan(props) {

    const starter = "STARTER"

    function showstater(){
        console.log(starter);
    }

    return (
        <>
            <div className='border-2 rounded-[20px] mb-16 '>
                <div className='p-4'>
                    <header className='text-center m-1'>
                        <h2 className='text-3xl'>
                            Starter
                        </h2>
                        <small className='text-base text-[#616163]'>
                            For Large Companies
                        </small>
                        <p className='text-3xl mt-2 mb-2'>
                            N 7,999
                        </p>
                        <small className='text-base text-[#616163]'>
                            Per Month
                        </small>
                    </header>
                    <hr className='w-[97%] m-auto' />
                    {list.map((item)=>{
                        return (
                            <ul>
                            <li className='flex p-2'>
                                    <Box mr={4}>
                                        <CheckIcon fontSize='small' />
                                    </Box> 
                                    <p>{item.content}</p>
                                </li> 
                            </ul>
                        )
                    })}
                </div>
                <div onClick={showstater} className='text-center mb-4'>
                    <Modal text=" Get Starter plan"/>
                </div>
            </div>
           
        </>
    );
}

export default Starterplan;