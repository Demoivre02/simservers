import React from 'react';

function List({header,one,two,three,four}) {
    return (
        <div>
            <ul className='mt-10 mr-4'>
                <li style={{color: "#333333"}} className='text-xl mb-2 font-bold text-{#949BA5}'>{header}</li>
                <li style={{color: "#4B6DDB "}} className='mb-3'>{one}</li>
                <li style={{color: "#4B6DDB "}} className='mb-3'>{two}</li>
                <li style={{color: "#4B6DDB "}} className='mb-3'>{three}</li>
                <li style={{color: "#4B6DDB "}} className='mb-3'>{four}</li>
            </ul>
        </div>
    );
}

export default List;