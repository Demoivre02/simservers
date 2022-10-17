import React from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function Balance({balancename,amount}) {
    return (
        <div className='bg-[#ffffff] rounded-[6px] border-2 border-[#ECEEF7] p-3 w-[18%]'>
            <p className='text-sm font-medium  max-w-[110px]'>{balancename}</p>
            <p className='text-xl font-medium mt-2'>{amount}</p>
            <div>
                <Link to="/topup">
                    <p className='text-right font-semibold text-[#949494]'>Top up</p>   
                </Link>
            </div>
        </div>
    );
}

export default Balance;