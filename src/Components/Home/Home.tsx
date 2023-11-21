import React from 'react';
import './Home.css';
import NotificationBar from '../Common/NotificationBar/NotificationBar';
import Navbar from '../Navbar/Navbar';

const Home: React.FC = () => {
    return (
        <div className='col-12 d-flex flex-column align-items-center'>
            <NotificationBar />
            <div className="d-flex w-75">
                <Navbar />
            </div>
        </div>
    )
}

export default Home