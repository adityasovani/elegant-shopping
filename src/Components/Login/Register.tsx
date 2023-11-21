import React from 'react';
import { Sidepane } from './Login';
import TextInput from '../Common/TextInput';
import { useNavigate } from 'react-router-dom';
import Button from '../Common/Button';
import './Login.css';

export const Register: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="row w-100 h-100">
            <Sidepane />
            {/* Register form */}
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <div className="flex-column login-form">
                    <span className='sign-up'>Sign Up</span>
                    <div className='flex-row mt-2 mb-2'>
                        <span className='already-have'>Already have an account? </span>
                        <span className='sign-link' onClick={() => navigate("/login")}>Sign In</span>
                    </div>
                    <form className='mt-3'>
                        <TextInput placeholder='Your name' wrapperStyle={{ marginTop: '1rem' }} />
                        <TextInput placeholder='Username' wrapperStyle={{ marginTop: '1rem' }} />
                        <TextInput placeholder='Email address' wrapperStyle={{ marginTop: '1rem' }} />
                        <TextInput placeholder='Password' wrapperStyle={{ marginTop: '1rem' }} />
                    </form>
                    <div className="mt-3 flex-row">
                        <div className='flex-row' style={{ cursor: 'pointer' }}>
                            <input type="checkbox" name="agree" id="agree" style={{ marginRight: 10, cursor: 'pointer' }} />
                            <label htmlFor="agree" className='already-have'>
                                I agree with <span className='policy'>Privacy Policy</span> and <span className='policy'>Terms of Use</span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-3 w-100">
                        <Button text='Sign Up' style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
