import React, { useState } from 'react';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
import { toast } from 'react-toastify';

const TopBar = ({ showNav, setShowNav }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <nav
            className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${
                showNav ? 'ms-auto' : ''
            }`}
            style={{
                transition: 'all 400ms',
                left: showNav ? '280px' : '0',
                right: '0',
            }}
        >
            <div className="container-fluid">
                <button
                    className="btn btn-light "
                    type="button"
                    onClick={() => setShowNav(!showNav)}
                    style={{ fontSize: '24px', padding: '10px' }}
                >
                    <IoMdMenu size={24} />
                </button>

                <div className="d-flex align-items-center ms-auto">
                    <div className="dropdown">
                        <button
                            className="btn btn-light dropdown-toggle d-flex align-items-center"
                            type="button"
                            onClick={() => setShowUserMenu(!showUserMenu)}
                        >
                            <img
                                src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png"
                                className="rounded-circle me-2"
                                style={{ width: '32px', height: '32px' }}
                                alt="profile_picture"
                            />
                            <span className="d-none d-md-inline">Demo</span>
                            <BiChevronDown className="ms-2" />
                        </button>
                        <ul
                            className={`dropdown-menu dropdown-menu-end ${
                                showUserMenu ? 'show' : ''
                            }`}
                        >
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="/admin/profile"
                                >
                                    <AiOutlineUser className="me-2" />
                                    Change Password
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/">
                                    <RiLogoutBoxLine className="me-2" />
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
