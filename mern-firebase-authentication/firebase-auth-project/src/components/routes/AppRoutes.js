import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import ForgotPass from '../../pages/login/ForgotPass';
import Register from '../../pages/register/Register';
import RegisterComplete from '../../pages/register/RegisterComplete';
import AdminLayout from '../layout/AdminLayout';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route
                    path="register/complete"
                    element={<RegisterComplete />}
                ></Route>

                <Route path="forgot" element={<ForgotPass />}></Route>
                <Route path="/admin" element={<AdminLayout />}></Route>
            </Route>
        </Routes>
    );
};
export default AppRoutes;
