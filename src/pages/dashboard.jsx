import React from 'react';
import Dashboardsidenav from '../common/dashboardsidenav';
import Main from '../dashboardcomponents/main';

function Dashboard(props) {
    return (
        <div className='isolate'>
                <div className=''>
                    <Dashboardsidenav />
                </div>
            <div className=' w-full'>
                <Main/>
            </div>
        </div>
    );
}

export default Dashboard;