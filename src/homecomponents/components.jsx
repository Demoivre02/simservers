import React from 'react';

function Comps({text,parag,style,icon}) {
    return (
        <>
        <div className='flex ml-12 mb-4 mt-8 flex-col'>
            <div style={style} className="flex rounded-lg max-w-[70px] item-center text-center p-4 items-center">
                <h1>{icon}</h1>
            </div>
            <div className='  w-full'>
                <h1 className='text-2xl mt-2 mb-2 tracking-wider font-medium'>{text}</h1>
                <p className='text-xl xl:w-[100%] lg:w-[100%] text-[#949BA5]'>{parag}</p>
            </div>
        </div>
        </>
    );
}

export default Comps;