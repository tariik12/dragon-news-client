import React from 'react';
import NavigationVar from '../pages/Home/Shared/NavigationVar/NavigationVar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationVar></NavigationVar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;