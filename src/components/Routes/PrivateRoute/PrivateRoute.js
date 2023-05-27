import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';

// component to check if user is logged in or not in private Routes
const PrivateRoute = ({ children }) => {
    // integration of react-firebase hooks here
    const [user, loading] = useAuthState(auth);

    // integration of react-router-dom hooks here
    const location = useLocation();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return <Navigate to={'/'} state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;