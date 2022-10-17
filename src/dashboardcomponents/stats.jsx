import React from 'react';
import {Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react'

function Stats({type,time,charttype}) {
    return (
        <div className='bg-[#fff] p-6  '>
            <div>
            <div className='flex justify-between'>
                <p>{type}</p>
                    <div className='flex'>
                        <p className='mr-2'>Show:</p>
                            <Menu >
                            <MenuButton className='text-xs text-[#109CF1]'>{time}</MenuButton>
                                <MenuList className='bg-gray-400'>
                                    {/* MenuItems are not rendered unless Menu is open */}
                                    <MenuItem className='text-xs p-2 w-full hover:bg-gray-100 text-[#fff]'>Week</MenuItem>
                                    <MenuItem className='text-xs p-2 w-full hover:bg-gray-100 text-[#fff]'>Today</MenuItem>
                                    <MenuItem className='text-xs p-2 w-full hover:bg-gray-100 text-[#fff]'>Last Month</MenuItem>
                                    <MenuItem className='text-xs p-2 w-full hover:bg-gray-100 text-[#fff]'>This Year</MenuItem>
                                </MenuList>
                            </Menu>
                    </div>
                </div>
                <div>
                    {charttype}
                </div>
            </div>
        </div>
    );
}

export default Stats;