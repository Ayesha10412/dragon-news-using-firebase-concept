import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../component/NavBar';

const AuthLayout = () => {
    return (
        <div className='bg-[#F3F3F3] font-Poppins '>
           
            <header className='w-11/12 mx-auto py-3'>
                <NavBar></NavBar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;