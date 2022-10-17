import React from 'react';
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function Dashboardsidenav(props) {
    return (
        <div >
            <div className=' bg-[#171F34]  w-[270px] h-screen fixed top-0 left-0 z-[1] top-0 left-0 rifgt-0'>
                <div className='mb-8 mr-4'>
                    <img src="images/logo.png" alt="" />
                </div>
                <div className='flex justify-center mt-4 mb-16 items-center'>
                    <div className='p-6 mr-2 rounded-full bg-[#D9D9D9]'></div>
                    <div>
                        <p className='text-white'>David James</p>
                        <small className='text-white'>davidjames@gmail.com</small>
                    </div>
                </div>
                <ul className='justify-center items-center'>
                    <Link to="dashboard">
                        <li className='w-full  hover:bg-slate-800 p-3'>
                            <div className='w-11/12 ml-4 flex justify-between items-center'>
                                <Icon icon="ic:sharp-dashboard" color="white" height="25" inline={true} />
                            <div className='w-4/5' >
                                    <p className='text-white text-left'> Dashboard</p>
                            </div> 
                            </div>
                        </li>
                    </Link>
                    <Link to="/transaction">
                        <li className='w-full hover:bg-slate-800 p-3  items-center'>
                            <div className='ml-4 w-11/12 flex justify-between items-center'>
                                <Icon icon="eos-icons:arrow-rotate" color="white" height="25" inline={true} />
                                <div className='w-4/5' >
                                    <p className='text-white text-left'>Transaction</p>
                                </div>  
                            </div>     
                        </li>
                    </Link>
                    <Link to="/userpanel">
                        <li className='w-full hover:bg-slate-800 p-3 items-center text-left'>
                            <div className='ml-4 flex justify-between w-11/12 items-center'>
                                <Icon icon="carbon:user-filled" color="white" height="25" inline={true} />
                                <div className='w-4/5'>
                                    <p className='text-white text-left'>User Panel</p> 
                                </div>  
                            </div>   
                        </li>
                    </Link>
                    <Link to="statistics">
                        <li className='w-full items-center hover:bg-slate-800 p-3 text-left'>
                            <div className='ml-4 flex justify-between w-11/12 text-left'>
                                <Icon icon="akar-icons:statistic-up" color="white" height="25" inline={true} />
                                <div className='w-4/5' >
                                    <p className='text-white text-left'>Statistics</p> 
                                </div>
                            </div>    
                        </li>
                    </Link>
                    <Link to="admin">
                        <li className='w-full items-center hover:bg-slate-800 p-3 text-left'>
                            <div className='ml-4 flex justify-between w-11/12 text-left'> 
                                <Icon icon="ic:baseline-admin-panel-settings" color="white" height="25" inline={true} />
                                <div className='w-4/5'>
                                    <p className='text-white text-left'>Admin Panel</p>
                                </div>   
                            </div>                  
                        </li>
                    </Link>
                    <Link to="/settings">
                        <li className='w-full hover:bg-slate-800 p-3   items-center'>
                            <div className='ml-4 flex justify-between w-11/12 text-left'>
                                <Icon icon="ci:settings" color="white" height="25" inline={true} />
                                <div className='w-4/5'>
                                    <p className='text-white text-left'>Settings</p> 
                                </div> 
                            </div>   
                        </li>
                    </Link>
                    <Link to="/support">
                        <li className='w-full hover:bg-slate-800 p-3 items-center'>
                            <div className='ml-4 flex justify-between w-11/12 text-left' >
                                <Icon icon="bx:help-circle" color="white" height="25" inline={true} />
                                <div  className='w-4/5'>
                                    <p className='text-white text-left'>Support</p> 
                                </div>
                            </div>
                        </li>
                    </Link>
                    <Link to="/logout">
                        <li className='w-full mt-20 hover:bg-slate-800 p-3 items-center'>
                            <div className='ml-4 flex justify-between w-11/12 text-left' >
                                <Icon icon="carbon:logout" color="white" height="25" inline={true} />
                                <div  className='w-4/5'>
                                    <p className='text-white text-left'>Logout</p> 
                                </div>
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Dashboardsidenav;