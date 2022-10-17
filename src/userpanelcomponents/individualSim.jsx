import React from 'react';
import Simbody from './simbody';
import registeredSims from './registered sim services';

function IndividualSim() {
    return (
        <div className=''>
            <div>
            {registeredSims.map((items)=>{
                return <Simbody id={items.id} name={items.name} simslot={items.simSlot}
                 quotas={items.simQuotas} deviceId={items.deviceIds}/>
            })}
            </div>
           
        </div>
    );
}

export default IndividualSim;