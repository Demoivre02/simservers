import React, { useState } from 'react';
import Recent from '../dashboardcomponents/recent';
import Dashboardtopnav from '../common/dashboardtopnav';
import { Icon } from '@iconify/react';
import recentarr from '../dashboardcomponents/recentarr';
import { Link } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react'


function Transactionbody(props) {
    const [recentarry, setrecentarray]= useState(recentarr)

    function handlechange(text){           
        const filtered = recentarry.filter(arraitem => arraitem.type === text)
      setrecentarray(filtered)
    }
    const filtearray= ["Sme cloud", "Sme device","Glo Cloud", "MTN CG", "Airtel CG",
                        "Web socket", "Wallet", "Recharge"]

    return (
        <div className='bg-[#F5F6F8] h-screen   z-[1]  ml-[250px]'>
            <Dashboardtopnav/>
            <div className='bg-transparent mb-4  mt-2 p-2 rounded-lg m-auto w-[92%]'>
                <div className='flex justify-between items-center m-auto '>
                    <p className='text-bold text-base font-medium text-[black]'> Transaction</p>
                    <ChakraProvider>
                        <Menu>
                            <MenuButton  >
                            <div className='flex mt-2 pl-8 cursor-pointer hover:font-semibold pr-8 items-center justify-center p-1 rounded-lg bg-[#F7F7F7]'>
                                <p className=' text-[#1a2b88] mr-2'>filter&sort</p> 
                                    <Icon icon="arcticons:pixel-filter" color="#1a2b88" width="20" inline={true} />
                            </div>
                            </MenuButton >
                                <MenuList >
                                    {filtearray.map((items, index)=>{
                                        return  <MenuItem key={index-1} onClick={()=>handlechange(items)}>{items}</MenuItem>
                                    })}
                                </MenuList>
                        </Menu>
                    </ChakraProvider>
                </div>
             </div>
             <div className='w-[95%] m-auto text-left'>
                {recentarry.map((item)=>{
                return<Link to={`/trans/${item.name}`}> <Recent  name={item.name} type={item.type} amount={item.amount} 
                phone={item.phone} key={item.id} time={item.time} status={item.status}/>
               </Link>  })}
            </div>  
        </div>
    );
}

export default Transactionbody;