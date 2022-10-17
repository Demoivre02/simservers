import React, { useState } from 'react';
import Dashboardsidenav from '../common/dashboardsidenav';
import Dashboardtopnav from '../common/dashboardtopnav';
import { Icon } from '@iconify/react';
import { Link, useParams } from 'react-router-dom';



function Transactiondetails(props) {
    const {id}= useParams()

    const myarray= [
        "Name","Reference", "Transaction Type", "Amount", "Time","Date","Status"
    ]
    const response= ["Peter Obi", "3265490026108", "Sme Device", "10GB","02:50","02/12/2022", "Successful"]
    return (
        <div>
            <div>
                <Dashboardsidenav/>
            </div>
            <div className='bg-[#F5F6F8] h-screen z-[1]  ml-[250px]'>
                <div className=''>
                    <Dashboardtopnav/>
                </div>             
                <div className='bg-[#fff] w-[90%] m-auto mt-8 rounded-lg shadow-lg mb-4 h-[80vh]'>
                    <div className=' m-auto  rounded-lg'>
                        <div className='flex justify-between p-2 pt-3  w-[20%]  mb-3 items-center p-2'>
                        <Link to="/transaction">
                            <Icon icon="emojione-monotone:back-arrow" color="#434244" width="35" />
                        </Link>
                            <p className='text-2xl font-medium'>Transaction</p>
                        </div>
                        <hr className=' m-auto mt-12 mb-8 w-[95%]' />
                        <div className='flex'>
                            <div>                           
                                {myarray.map((items, index)=>{
                                    return  <div className='ml-2 mb-2 p-2'><p className='text-xl text-[#949494]' key={index-1}>{items}</p></div> 
                                })}              
                            </div>
                            <div>
                                {response.map((res,index)=>{
                                    return <div className='ml-16 mb-2 p-2'><p className='text-xl' key={index-1}>{res}</p></div> 
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transactiondetails;