import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


import {
    FaGoogle,
    FaFacebook,
    FaGithub,
    FaYahoo,
    FaMicrosoft,
} from 'react-icons/fa';

function Login() {
    // * useState
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="py-3 py-md-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="card border border-light-subtle rounded-3 shadow-sm">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                {/* Defrent login options */}
                                <div className="d-grid gap-2 mb-3">
                                    <button
                                        className="btn btn-outline-danger btn-lg"
                                        type="button"
                                    >
                                        <FaGoogle className="me-2" /> Sign in
                                        with Google
                                    </button>

                                    <button
                                        className="btn btn-outline-primary"
                                        type="button"
                                    >
                                        <FaFacebook className="me-2" /> Sign in
                                        with Facebook
                                    </button>

                                    <button
                                        className="btn btn-outline-dark btn-lg"
                                        type="button"
                                    >
                                        <FaGithub className="me-2" /> Sign in
                                        with GitHub
                                    </button>

                                    <button
                                        className="btn btn-outline-warning btn-lg"
                                        type="button"
                                    >
                                        <FaYahoo className="me-2" /> Sign in
                                        with Yahoo
                                    </button>

                                    <button
                                        className="btn btn-outline-info btn-lg"
                                        type="button"
                                    >
                                        <FaMicrosoft className="me-2" /> Sign in
                                        with Microsoft
                                    </button>
                                </div>

                                <div className="text-center mb-3">
                                    <span className="text-black fw-bold">
                                        Or
                                    </span>
                                </div>

                                {/* Login with Email and Password */}
                                <div className="row gy-2 overflow-hidden">
                                    <form action="">
                                        {/* Email */}
                                        <div className="col-12 mb-1">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    required
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="form-label"
                                                >
                                                    Email
                                                </label>
                                            </div>
                                        </div>

                                        {/* Password     */}

                                        <div className="col-12 mb-1">
                                            <div className="form-floating">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Password"
                                                    required
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <label
                                                    htmlFor="password"
                                                    className="form-label"
                                                >
                                                    Password
                                                </label>
                                            </div>
                                        </div>

                                        {/* Button */}

                                        <div className="col-12">
                                            <div className="d-grid ">
                                                <button
                                                    className="btn btn-primary btn-lg"
                                                    type="submit"
                                                >
                                                    Log in
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                    {/* Forgot Password */}

                                    <div className="col-12 text-left">
                                        <a
                                            href="/forgot"
                                            className="link-primary text-decoration-none text-left"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>

                                    {/* Sign up */}
                                    <div className="col-12">
                                        <p className="m-0 text-secondary text-center">
                                            Don't have an account?{' '}
                                            <a
                                                href="/register"
                                                className="link-primary text-decoration-none"
                                            >
                                                Sign up
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
