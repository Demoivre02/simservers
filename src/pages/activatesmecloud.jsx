import React from 'react';
import Dashboardsidenav from '../common/dashboardsidenav';
import Dashboardtopnav from '../common/dashboardtopnav';
import ReusedModal from '../userpanelcomponents/reusedModal';
import modalsArray from '../userpanelcomponents/activatesmeArray';

function Activatesmecloud(props) {
    return (
        <div>
            <div>
                <Dashboardsidenav/>
            </div>
            <div className='bg-[#F5F6F8] h-screen z-[1]  ml-[250px]'>
                <div>
                    <Dashboardtopnav/>
                </div>
                <div className='ml-16 mt-8 flex flex-col'>
                    {modalsArray.map((items)=>{
                        return  <div className='mt-4 bg-[#FFFFFF] w-[30%] rounded-lg'>
                            <ReusedModal name={items.name} />
                            </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Activatesmecloud;