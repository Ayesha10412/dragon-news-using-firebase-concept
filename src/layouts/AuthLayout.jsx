import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            Auth AuthLayout
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;