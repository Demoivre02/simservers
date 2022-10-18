import React from 'react';

function Solutions(props) {
    return (
        <div className=' p-9' style={{background: "linear-gradient(178.18deg, #5533FF 38.36%, #4B6DDB 102.8%)"}} >
            <div className='2xl:flex text-center items-center justify-around w-[70%]  m-auto'>   
                <p className='sm:text-xl text-base m-auto  font-medium sm:font-bold text-white'>Creative solutions for</p>
                <div className='w-[100%]'>
                    <img className='w-[50%] mt-4 m-auto text-center' src="images/netwoks.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Solutions;