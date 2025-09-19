import React, { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { MdLanguage, MdOutlineCategory } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
//import CompanyLogo from '../../assets/images/FTC.png'

const SideBar = forwardRef(({ showNav }, ref) => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div ref={ref} className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '280px', height: '200vh' }}>
            <div className="d-flex justify-content-start mb-4">
                {/* <img src={CompanyLogo} className="img-fluid" alt="company logo" style={{ width: '56px' }} /> */}
            </div>
            <ul className="nav nav-pills flex-column mb-auto text-white">
                <li className="nav-item mb-2 text-white">
                    <small className="  text-uppercase fw-bold d-block text-start text-white">Main Pages</small>
                </li>
                <li className="nav-item">
                    <Link to="/admin/dashboard" className={`nav-link text-white ${isActive('/admin/dashboard')}`}>
                        <div className="d-flex align-items-center">
                            <RxDashboard className="me-3" />
                            <span>Dashboard</span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/sectionOne" className={`nav-link text-white ${isActive('/admin/sectionOne')}`}>
                        <div className="d-flex align-items-center">
                            <MdLanguage className="me-3" />
                            <span>Section 1</span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/sectionTwo" className={`nav-link text-white ${isActive('/admin/sectionTwo')}`}>
                        <div className="d-flex align-items-center">
                            <MdOutlineCategory className="me-3" />
                            <span>Section 2</span>
                        </div>
                    </Link>
                </li>

                <li className="nav-item mt-4 mb-2">
                    <small className="  text-uppercase fw-bold d-block text-start text-white">Others</small>
                </li>
                <li className="nav-item">
                    <Link to="/admin/User" className={`nav-link text-white ${isActive('/admin/User')}`}>
                        <div className="d-flex align-items-center">
                            <FaUsers className="me-3" />
                            <span>Users</span>
                        </div>
                    </Link>
                </li>

                {/* <li className="nav-item">
                    <Link to="/admin/privacy-policy" className={`nav-link text-white ${isActive('/admin/privacy-policy')}`}>
                        <div className="d-flex align-items-center">
                            <MdOutlinePrivacyTip className="me-3" />
                            <span>Privacy Policy</span>
                        </div>
                    </Link>
                </li> */}
            </ul>
        </div>
    );
});

SideBar.displayName = 'SideBar';

export default SideBar;