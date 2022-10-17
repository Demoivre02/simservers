import React from 'react';
import array from "./componentsarray"
import Comps from './components';

function Features(props) {
    return (
        <>
            <div>
                <h2 className='text-4xl font-bold mt-12 text-center'>Why SIMSERVERS.IO ?</h2>
            </div>
            <div className='mt-8 mb-2'>
                <p className='w-[60%] leading-normal tracking-normal text-center m-auto text-[#949BA5] text-xl'>SIMSERVERS.IO is an automation
                 service platform designed to help you dispense airtime and data automatically from your
                  sim to your customers easily and seamlessly using our structured Application Programming 
                  Interface (APIs).</p>
            </div>
            <div className='flex flex-row-reverse mt-16 justify-between w-[85%] m-auto '>
                <div className='ml-16 w-4/5 grid grid-cols-2 grid-rows-2 '>
                    {array.map((item)=>{
                        return <Comps key={item.id} text={item.text} parag={item.parag}
                            style={item.style} icon={item.icon} /> 
                    })}
                </div>
                <div className='w-3/5 '>
                    <img src="images/side.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Features;