import React, { useState } from 'react';
import './NotificationBar.css';
import Close from '../../../Assets/Icons/close.svg';
import ticket from '../../../Assets/Icons/ticket.svg';
import rightArrow from '../../../Assets/Icons/arrowRight.svg';

const NotificationBar: React.FC = () => {

    const [showNotification, setshowNotification] = useState(true);

    return (
        showNotification ? <div className='col-12 d-flex notification-container flex-row justify-content-between'>
            <span></span>
            <div className='d-flex flex-row' style={{ gap: '0.9rem' }}>
                <img src={ticket} alt="coupon" />
                <span>30% off storewide — Limited time!</span>
                <div className='d-flex flex-row shop-now-wrapper'>
                    <span className='shop-now'>Shop Now!</span>
                    <img src={rightArrow} alt="->" />
                </div>
            </div>
            <img src={Close} alt="X" style={{ marginRight: 10, cursor: 'pointer' }} onClick={() => setshowNotification(false)} />
        </div> : <></>
    )
}

export default NotificationBar