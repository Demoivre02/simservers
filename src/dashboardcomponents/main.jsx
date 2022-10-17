import React, { useState } from 'react';
import Dashboardtopnav from '../common/dashboardtopnav';
import { ChakraProvider } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import {Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react'
import Balance from '../common/Balance';
import balancearray from './balance';
import Stats from './stats';
import Barchart from './barchart';
import Piechart from './piechart';
import Recent from './recent';
import recentarr from './recentarr';

function Main() {

    const [recentarry, setrecentarray]= useState(recentarr)

        function handlechange(text){           
            const filtered = recentarry.filter(arraitem => arraitem.type === text)
          setrecentarray(filtered)
        }
    
    const filtearray= ["Sme cloud", "Sme device","Glo Cloud", "MTN CG", "Airtel CG",
                        "Web socket", "Wallet", "Recharge"]

    return (
        <div className='bg-[#F5F6F8]  z-[1]  ml-[250px]'>
            <Dashboardtopnav/>
            <div className='grid gap-10 grid-cols-2 w-11/12 m-auto'>
                <div>
                    <p className='mt-2 font-medium text-sm mb-2'>Account Numbers:</p>
                    <p className='text-xs font-semibold '>Wema Bank: 7305939732</p>
                    <p className='text-xs font-semibold '>Rolez Microfinance Bank: 6134313143</p>
                    <p className='mt-1 italic text-sm '>(Pls note that N50 charges apply)</p>
                </div>
                <div className='mt-8 text-right'>
                    <ChakraProvider >
                    <Menu>
                        <MenuButton className='bg-[#467BFB] text-sm pl-4 pr-4 p-2 rounded-lg text-white text-base'>
                            Quick Options
                        </MenuButton>
                        <MenuList>
                            <MenuItem className='text-sm '>Register Sim Services</MenuItem>
                            <MenuItem className='text-sm '>Activate Cloud Services</MenuItem>
                            <MenuItem className='text-sm '>Add New API</MenuItem>
                        </MenuList>
                        </Menu>
                    </ChakraProvider>
                </div>
            </div>
            <div className='flex justify-between mt-2 m-auto w-[92%]'>
                    {balancearray.map((item)=>{
                        return <Balance balancename={item.balance}
                        key={item.id} amount={item.Amount}/>
                    })} 
            </div>
            <div className='grid grid-cols-2 gap-10  w-[92%] m-auto mt-4 mb-4'>
                    <div className='bg-[#fff]'>
                        <div className='max-w-[550px] m-auto'>
                            <Stats type="Statistics" time="Monthly" charttype={<Barchart/>} />
                        </div>  
                    </div>
                    <div className='bg-[#fff]'>
                        <div className=' max-w-[350px] m-auto'>
                            <Stats type="Transactions" time="This month" charttype={<Piechart/>} />
                        </div>
                    </div>               
            </div>
            <div className='bg-[#fff] mb-4  mt-2 p-2 rounded-lg m-auto w-[92%]'>
                <div className='flex justify-between items-center m-auto '>
                    <p className='text-bold text-base font-medium text-[black]'>Recent Transaction</p>
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
                <div className=''>
                   {recentarry.map((item)=>{
                   return  <Recent name={item.name} type={item.type} amount={item.amount} 
                   phone={item.phone} key={item.id} time={item.time} status={item.status}/>
                   })}
                </div>  
            </div>
        </div>
    );
}

export default Main;