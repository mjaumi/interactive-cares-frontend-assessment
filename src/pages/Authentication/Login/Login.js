import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

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
                    <form>
                        <div className='ed-tech-auth-input-container'>
                            <span>Email:</span>
                            <input type="email" className='ed-tech-auth-input' placeholder='Email Here...' />
                        </div>
                        <div className='ed-tech-auth-input-container'>
                            <span>Password:</span>
                            <input type="password" className='ed-tech-auth-input' placeholder='Password Here...' />
                        </div>
                        <p className='ed-tech-create-account-text'>Don't Have An Account? <Link to='/signup'>Create Account Here</Link></p>
                        <button className='ed-tech-button ed-tech-button-block log-btn' type="submit">Login</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;