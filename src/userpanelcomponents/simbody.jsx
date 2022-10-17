import React, { useState } from 'react';
import Editdevice from './editprofile';
import Addcredit from './addCredit';

function Simbody({id,name,quotas,deviceId, simslot}) {
    const [highlight, sethighlight]= useState(false)

    function handlehighlight(){
        highlight === true ? sethighlight(false) : sethighlight(true)
    }

    return (
        <div className='flex border-t items-center justify-between'>
            <div style={{backgroundColor : highlight? "#F2F9FF": "#ffffff"}} className='flex w-[60%] p-3 justify-between'>

                <div className='w-[1%]'>
                    <input onClick={handlehighlight} type="checkbox" name="select" id="" />
                </div>
                <div className='w-[5%] text-left '>
                    <p>{id}</p>
                </div>
                <div className='w-[15%] text-left ' >
                    <p>{name}</p>
                </div>
                <div className='w-[40%]mr-20  text-left  '>
                    <p>{simslot}</p>
                </div>
                <div>
                    <p>{quotas}</p>
                </div>
                <div>
                    <p>{deviceId}</p>
                </div>
            </div>
            <div className='flex mr-16 '>
                <div>
                    <Editdevice name="Edit device"/>
                </div>
                <div>
                    <Addcredit name="Add credit"/>
                </div>
            </div>
        </div>
    );
}

export default Simbody;