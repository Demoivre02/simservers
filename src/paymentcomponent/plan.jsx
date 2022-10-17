import React from 'react';
import styles from "./plan.module.css"
import Starterplan from './starterplan';
import Powerplan from './Powerplan';

function Plan() {
    return (
        <div className={styles.body}>
                <div className={styles.plan}>
                    <Starterplan/>
                    <Powerplan/>
                </div>
        </div>
    );
}

export default Plan;