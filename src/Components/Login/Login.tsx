import React from 'react';
import './Login.css';
import TextInput from '../Common/TextInput';
import Button from '../Common/Button';
import { useNavigate } from 'react-router-dom';

export const Sidepane: React.FC = () =>
    <div className="col-md-6 col-sm-12 side-pane d-flex justify-content-center text-center">
        <span className='mt-4 pane-text' style={{ position: 'fixed' }}>3legant</span>
        <img src={require('../../Assets/Images/SidePane.png')} alt="side pane" className='w-75 d-flex' />
    </div>;

const Login: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="row w-100 h-100">
            <Sidepane />
            {/* Login form */}
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <div className="flex-column login-form">
                    <span className='sign-up'>Sign In</span>
                    <div className='flex-row mt-2 mb-2'>
                        <span className='already-have'>Already have an account? </span>
                        <span className='sign-link' onClick={() => navigate("/register")}>Sign Up</span>
                    </div>
                    <form className='mt-3'>
                        <TextInput placeholder='Your usernam or email address'
                            wrapperStyle={{ marginTop: '2rem' }} />
                        <TextInput placeholder='Password' type='password' wrapperStyle={{ marginTop: '1.5rem' }} />
                    </form>
                    <div className="mt-4 flex-row">
                        <div className='flex-row' style={{ cursor: 'pointer' }}>
                            <input type="checkbox" name="agree" id="agree" style={{ marginRight: 10, cursor: 'pointer' }} />
                            <label htmlFor="agree" className='remember-me'>
                                Remember Me
                            </label>
                        </div>
                    </div>
                    <div className="mt-3 w-100" onClick={() => {
                        localStorage.setItem('loggedIn', '1');
                        navigate('/');
                    }}>
                        <Button text='Sign In' style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;