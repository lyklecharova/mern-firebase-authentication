import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import ForgotPass from '../../pages/login/ForgotPass';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />}></Route>
                <Route path="forgot" element={<ForgotPass />}></Route>
            </Route>
        </Routes>
    );
};
export default AppRoutes;
