import React from 'react';
import { Icon } from '@iconify/react';
import { ChakraProvider } from '@chakra-ui/react';
import {Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react'



function dropdown({amount,name,time}) {
    return (
        <div>
             <div className='flex justify-between w-[80%] ml-16 mb-4'>
                <div>
                    <p className='text-[#467BFB] text-2xl font-medium'>{amount}</p>
                    <p className='text-[#73CBFD] text-xl'>{name}</p>
                </div>
                <div className=''>
                    <ChakraProvider >
                        <Menu>
                             <MenuButton className=' text-sm  p-2 border border-[#979699] rounded-sm  text-base'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[#979699]'>{time}</p>
                                    <Icon icon="ant-design:caret-down-filled" color="#979699" width="15" />
                                </div>  
                                </MenuButton>
                                <MenuList>
                                    <MenuItem className='text-sm '>This Week</MenuItem>
                                    <MenuItem className='text-sm '>Today</MenuItem>
                                    <MenuItem className='text-sm '>Last month</MenuItem>
                                    <MenuItem className='text-sm '>This year</MenuItem>
                                </MenuList>
                                </Menu>
                            </ChakraProvider>
                        </div>
            </div>
        </div>
    );
}

export default dropdown;