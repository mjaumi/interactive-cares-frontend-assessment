import React, { useState } from 'react';
import styles from './signup.module.scss';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import axios from '../../../utils/axios';

const Signup = () => {
    // integration of react-firebase hooks here
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    // integration of react hooks here
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    // integration of react-router-dom hooks here
    const navigate = useNavigate();

    // handler function to handle user sign up
    const userSignupHandler = async (e) => {
        e.preventDefault();

        if (password === confPassword) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: firstName + ' ' + lastName });

            const userData = {
                email,
                watched_videos: [],
                added_notes: [],
            }

            const { status } = await axios.post('/user', userData);

            console.log(user, status);
            navigate('/');
        }

    }

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
                    <form onSubmit={userSignupHandler}>
                        <div className={styles.ed_tech_signup_name_container}>
                            <div className='ed-tech-auth-input-container'>
                                <span>First Name:</span>
                                <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" className='ed-tech-auth-input' placeholder='First Name Here...' required />
                            </div>
                            <div className='ed-tech-auth-input-container'>
                                <span>Last Name:</span>
                                <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" className='ed-tech-auth-input' placeholder='Last Name Here...' required />
                            </div>
                        </div>
                        <div className='ed-tech-auth-input-container'>
                            <span>Email:</span>
                            <input value={email} onChange={e => setEmail(e.target.value)} type="email" className='ed-tech-auth-input' placeholder='Email Here...' required />
                        </div>
                        <div className='ed-tech-auth-input-container'>
                            <span>Password:</span>
                            <input value={password} onChange={e => setPassword(e.target.value)} type="password" className='ed-tech-auth-input' placeholder='Password Here...' required />
                        </div>
                        <div className='ed-tech-auth-input-container'>
                            <span>Confirm Password:</span>
                            <input value={confPassword} onChange={e => setConfPassword(e.target.value)} type="password" className='ed-tech-auth-input' placeholder='Retype Password Here...' required />
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