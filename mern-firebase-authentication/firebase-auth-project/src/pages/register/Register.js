import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { toast } from 'react-toastify';
import { FaUserPlus } from 'react-icons/fa';

function Register() {
    const [email, setEmail] = useState('');

    return (
        <div className=" py-3 py-md-5  ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
                        <div className="card border border-light-subtle rounded-3 shadow-sm">
                            <div className="card-body p-3 p-md-4 p-xl-4">
                                <div className="text-center mb-3">
                                    <FaUserPlus size={70} color="gray" />
                                </div>
                                <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                                    Register your account
                                </h2>

                                <div action="#!">
                                    <div className="row gy-2 overflow-hidden">
                                        <form action="">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        id="email"
                                                        placeholder="name@example.com"
                                                        required
                                                        value={email}
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
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

                                            <div className="col-12">
                                                <div className="d-grid my-3">
                                                    <button
                                                        className="btn btn-primary btn-lg"
                                                        type="submit"
                                                    >
                                                        Register
                                                    </button>
                                                </div>
                                            </div>
                                        </form>

                                        <div className="col-12">
                                            <p className="m-0 text-secondary text-center">
                                                Already have an account?{' '}
                                                <a
                                                    href="/login"
                                                    className="link-primary text-decoration-none"
                                                >
                                                    Log in
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
            <ToastContainer />
        </div>
    );
}

export default Register;
