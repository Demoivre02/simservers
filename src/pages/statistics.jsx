import React from 'react';
import { Icon } from '@iconify/react';
import Dashboardsidenav from '../common/dashboardsidenav';
import Dashboardtopnav from '../common/dashboardtopnav';
import { ChakraProvider } from '@chakra-ui/react';
import {Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react'
import Linechart from '../statisticscomponent/linechart';
import Radialchart from '../statisticscomponent/radialchart';
import TriangulaBar from '../statisticscomponent/statBarchart';
import Dropdown from '../statisticscomponent/dropdown';

function Statistics(props) {

    const filtearray= ["Sme cloud", "Sme device","Glo Cloud", "MTN CG", "Airtel CG",
    "Web socket", "Wallet", "Recharge"]

    function handlechange(text){
        console.log(text)
    }

    return (
        <div>
            <div>
                <Dashboardsidenav/>
            </div>
            <div className='bg-[#F5F6F8] pb-16 z-[1]  ml-[250px]'>
                <div>
                    <Dashboardtopnav/>
                </div>
                <div className='ml-16 mt-8 w-[90%] m-auto'>
                    <div className='flex justify-between mb-4 w-[93%] mb-[8] items-center m-auto '>
                        <p className='text-medium  text-2xl font-medium text-[black]'>Statistics</p>
                        <ChakraProvider>
                            <Menu>
                                <MenuButton  >
                                <div className='flex mt-2 pl-8 cursor-pointer hover:font-semibold pr-8 items-center justify-center p-1 rounded-lg bg-[#F7F7F7]'>
                                    <p className=' text-[#1a2b88] mr-2'>filter&sort</p> 
                                    <Icon icon="arcticons:pixel-filter" color="#1a2b88" width="20" inline={true} />
                                </div>
                                </MenuButton >
                                    <MenuList>
                                    {filtearray.map((items, index)=>{
                                            return  <MenuItem  key={index-1} onClick={()=>handlechange(items)}>{items}</MenuItem>
                                        })}
                                    </MenuList>
                            </Menu>
                        </ChakraProvider>
                    </div>
                </div>
                <div className='bg-[#fff] shadow-lg w-[85%] rounded-lg m-auto p-2'>
                    <Dropdown amount="N728,390" name="Total revenue" time="Week"/>
                    <div className='m-auto'>
                        <Linechart/>
                    </div>   
                </div>
                <div className=' w-[85%] mt-5  m-auto grid grid-cols-2 gap-10'>
                    <div className='bg-[#fff] rounded-lg shadow-lg'>
                        <div className='mt-4'>
                            <Dropdown name="Data Sold" time="This month"/> 
                        </div> 
                        <Radialchart/>
                    </div>
                    <div className='bg-[#fff] rounded-lg shadow-lg'>
                    <div className='mt-4'>
                            <Dropdown name="Vendor Activity" time="This week"/> 
                        </div>
                        <TriangulaBar/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistics;