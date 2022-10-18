import React from 'react';
import array from "./componentsarray"
import Comps from './components';

function Features(props) {
    return (
        <>
            <div>
                <h2 className='md:text-4xl text-2xl font-bold md:mt-12 mt-8 text-center'>Why SIMSERVERS.IO ?</h2>
            </div>
            <div className='mt-8 mb-2'>
                <p className='md:w-[60%] w-[90%] m-auto leading-normal tracking-normal text-center m-auto text-[#949BA5] text-xl'>SIMSERVERS.IO is an automation
                 service platform designed to help you dispense airtime and data automatically from your
                  sim to your customers easily and seamlessly using our structured Application Programming 
                  Interface (APIs).</p>
            </div>
            <div className='lg:flex flex-row-reverse mt-16 justify-between w-[100%] lg:w--[90%] md:w-[80%] m-auto '>
                <div className='lg:ml-16 m-auto w-[95%]  md:w-4/5 sm:grid grid-cols-2 grid-rows-2 '>
                    {array.map((item)=>{
                        return <Comps key={item.id} text={item.text} parag={item.parag}
                            style={item.style} icon={item.icon} /> 
                    })}
                </div>
                <div className='w-3/5 md:m-auto m-auto'>
                    <img className='m-auto mt-4' src="images/side.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Features;