import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Navigate } from 'react-router-dom';

// component to check if user is logged in or not in private Routes
const PrivateRoute = ({ children }) => {
    // integration of react-firebase hooks here
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <p>Loading...</p>;
    }

    return user ? children : <Navigate to={'/'} />;
};

export default PrivateRoute;