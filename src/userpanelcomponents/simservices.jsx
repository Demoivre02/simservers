import React from 'react';
import IndividualSim from './individualSim';

function Simservices(props) {
    return (
        <div>
            <div className='flex justify-between  w-[62%] mb-4'>
                <div>
                    <p>1</p>
                </div>
                <div className='ml-4'>
                    <p>ID</p>
                </div>
                <div className='ml-8'>
                    <p className='text-[#70C6FD]'>Name</p>
                </div>
                <div className='ml-20'>
                    <p className='text-[#70C6FD]'>Sim  Slot</p>
                </div>
                <div>
                    <p className='text-[#70C6FD]'>Sim Quotas</p>
                </div>
                <div>
                    <p className='text-[#70C6FD]'>Device ids</p>
                </div>
            </div>
            <IndividualSim/>
        </div>
    );
}

export default Simservices;