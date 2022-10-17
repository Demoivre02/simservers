import React from 'react';
import Dashboardsidenav from '../common/dashboardsidenav';
import Transactionbody from '../transactioncomponent/transactionbody';

function Transaction(props) {
    return (
        <div>
            <div>
                    <Dashboardsidenav/>
            </div>
            <div>
                <Transactionbody/>
            </div>
        </div>
    );
}

export default Transaction;