import React from 'react';
import styles from './signup.module.scss';
import { Link } from 'react-router-dom';

const Signup = () => {

    // rendering signup page here
    return (
        <>
            <section className='ed-tech-auth-section'>
                <div className='ed-tech-auth-form-container'>
                    <div className='ed-tech-logo'>
                        <h2>Ed <span>Tech</span></h2>
                    </div>
                    <div className='ed-tech-auth-text'>
                        <h3>Signup With New Account</h3>
                    </div>
                    <form>
                        <div className={styles.ed_tech_signup_name_container}>
                            <div className='ed-tech-auth-input-container'>
                                <span>First Name:</span>
                                <input type="text" className='ed-tech-auth-input' placeholder='First Name Here...' />
                            </div>
                            <div className='ed-tech-auth-input-container'>
                                <span>Last Name:</span>
                                <input type="text" className='ed-tech-auth-input' placeholder='Last Name Here...' />
                            </div>
                        </div>
                        <div className='ed-tech-auth-input-container'>
                            <span>Email:</span>
                            <input type="email" className='ed-tech-auth-input' placeholder='Email Here...' />
                        </div>
                        <div className='ed-tech-auth-input-container'>
                            <span>Password:</span>
                            <input type="password" className='ed-tech-auth-input' placeholder='Password Here...' />
                        </div>
                        <p className='ed-tech-create-account-text'>Already Have An Account? <Link to='/'>Login Here</Link></p>
                        <button className='ed-tech-button ed-tech-button-block log-btn' type="submit">Signup</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Signup;