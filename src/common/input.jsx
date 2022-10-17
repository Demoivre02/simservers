import React from 'react';

function Input({type, name, placeholder,w}) {
    return (
        <div className='mt-4'>
            <input className='p-2 w-4/5 placeholder:text-lighter rounded-md border-gray-500 border ' type={type} name={name} id=""
             placeholder={placeholder} required/>
        </div>
    );
}

export default Input;