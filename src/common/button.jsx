import React from 'react';



function Button({style,text}) {
    return (
        <div className='xl:w-[27%] lg:w-[32%] rounded-2xl p-2'  style={style}>
            <h3>{text}</h3>
        </div>
    );
}

export default Button;