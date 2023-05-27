import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const Login = () => {
    // integration of react-firebase hooks here
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    // integration of react hooks here
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // integration of react-router-dom hooks here
    const navigate = useNavigate();

    // handler function to handle user login
    const userLoginHandler = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(email, password);
    }

    if (user) {
        toast.success('Login Successful!!', {
            toastId: 'login success',
        });
        navigate('/videos/1');
    }

    if (error) {
        toast.error('Login Failed!!', {
            toastId: 'login fail',
        });
    }

    // rendering login page here
    return (
        <>
            <section className='ed-tech-auth-section'>
                <div className='ed-tech-auth-form-container'>
                    <div className='ed-tech-logo'>
                        <h2>Ed <span>Tech</span></h2>
                    </div>
                    <div className='ed-tech-auth-text'>
                        <h3>Login To Your Account</h3>
                    </div>
                    <form onSubmit={userLoginHandler}>
                        <div className='ed-tech-auth-input-container'>
                            <span>Email:</span>
                            <input value={email} onChange={e => setEmail(e.target.value)} type="email" className='ed-tech-auth-input' placeholder='Email Here...' />
                        </div>
                        <div className='ed-tech-auth-input-container'>
                            <span>Password:</span>
                            <input value={password} onChange={e => setPassword(e.target.value)} type="password" className='ed-tech-auth-input' placeholder='Password Here...' />
                        </div>
                        <p className='ed-tech-create-account-text'>Don't Have An Account? <Link to='/signup'>Create Account Here</Link></p>
                        <button className='ed-tech-button ed-tech-button-block log-btn' type="submit" disabled={loading}>Login</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;