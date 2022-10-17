import React from 'react';
import Dashboardsidenav from '../common/dashboardsidenav';
import Dashboardtopnav from '../common/dashboardtopnav';
import { Link } from 'react-router-dom';

function Userpanel(props) {
    return (
        <div>
            <div>
                <Dashboardsidenav/>
            </div>
            <div className='bg-[#F5F6F8] h-screen z-[1]  ml-[250px]'>
                <div>
                    <Dashboardtopnav/>
                </div>
                <div>
                    <p className='text-2xl ml-20 mt-5 font-semibold'>
                        User Panel
                    </p>
                    <Link to="/register">
                        <div className='bg-[#fff] ml-16 mt-5 hover:bg-[#F5F6F8] mb-3 rounded-[10px]  w-[35%]'>
                            <p className='text-[#323C47]  p-3 font-medium'>Recharge Sim Services</p>
                        </div>
                    </Link>
                    <Link to="/activatesme">
                        <div className='bg-[#fff] ml-16 mt-5 hover:bg-[#F5F6F8] rounded-[10px]  w-[35%]'>
                            <p className='text-[#323C47]  p-3 font-medium'>CG charge</p>
                        </div>
                    </Link>
                    <Link to="/activatesme">
                        <div className='bg-[#fff] ml-16 mt-5 hover:bg-[#F5F6F8] rounded-[10px]  w-[35%]'>
                            <p className='text-[#323C47]  p-3 font-medium'>Activate Cloud Services</p>
                        </div>
                    </Link>
                    <Link to="/activatesme">
                        <div className='bg-[#fff] ml-16 mt-5 hover:bg-[#F5F6F8] rounded-[10px]  w-[35%]'>
                            <p className='text-[#323C47]  p-3 font-medium'>Activate SME cloud</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Userpanel;