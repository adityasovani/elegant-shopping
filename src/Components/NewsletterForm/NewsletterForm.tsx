import React from 'react';
import './NewsletterForm.css';
import email from "../../Assets/Icons/email.svg";

const NewsletterForm: React.FC = () => {
    return (
        <div className="newsletter-wrapper  d-flex justify-content-center align-items-center ">
            <div className="newsletter-content d-flex justify-content-center align-items-center flex-column">
                <span className='join-newsletter-title'>Join Our Newsletter</span>
                <span className='newsletter-campaign'>Sign up for deals, new products and promotions</span>
                <div className="d-flex flex-row">
                    <div className="input-group" style={{width:'30rem'}}>
                        <div className="input-group-text border-bottom">
                            <img src={email} alt="mail" />
                        </div>
                        <input type="text" className="form-control border-bottom" placeholder='Email address'/>
                        <span className="input-group-text border-bottom signup-button">Signup</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsletterForm