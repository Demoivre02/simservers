import React from 'react';
import { Icon } from '@iconify/react';
import Dashboardsidenav from '../common/dashboardsidenav';
import Dashboardtopnav from '../common/dashboardtopnav';
import Adddevice from '../userpanelcomponents/adddevice';
import Reset from '../userpanelcomponents/reset';
import Delete from '../userpanelcomponents/delete';
import Simservices from '../userpanelcomponents/simservices';

function Registersimservices(props) {
    return (
        <div>
            <div>
                <Dashboardsidenav/>
            </div>
            <div className='bg-[#F5F6F8] h-screen z-[1]  ml-[250px]'>
                <div>
                    <Dashboardtopnav/>
                </div>
                <div className='ml-16 mt-8'>
                    <div className=''>
                        <p className='text-2xl font-semibold'>Register sim services</p>
                    </div> 
                    <hr className='w-[55%] mt-2' />
                    <div className='flex w-[70%] mt-3'>
                        <div className='bg-[#fff] mr-4 shadow-lg flex rounded-[30px] p-[5px] items-center'>
                            <Icon icon="fe:search" color="#adb8cc" width="25" />
                            <div>
                                <input className=' p-[0] ml-1 outline-none' placeholder='Search name or device' type="search" name="user" id="" />
                            </div>
                        </div>
                        <div className=''>
                            <Adddevice name="Add new device"/>
                        </div>
                        <div className=''>
                            <Reset name="Reset"/>
                        </div>
                        <div className=''>
                           <Delete name="Delete"/>
                        </div>
                        
                    </div>
                </div>
                <div className='ml-16 p-2 w-[90%] shadow-lg m-auto rounded-lg bg-[#fff] mt-8'> 
                    <Simservices/>
                </div>
            </div>
        </div>
    );
}

export default Registersimservices;