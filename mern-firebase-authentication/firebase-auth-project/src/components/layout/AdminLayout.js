import { Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../header/TopBar';
import SideBar from '../sidebar/SideBar';

const AdminLayout = () => {
    const [showNav, setShowNav] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
            setShowNav(false);
        } else {
            setIsMobile(false);
            setShowNav(true);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            handleResize(); // Call on initial load
        }
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="d-flex bg-light">
            <TopBar showNav={showNav} setShowNav={setShowNav} />
            <Transition
                as="div"
                show={showNav}
                enter="transition-transform duration-400"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition-transform duration-400"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <SideBar showNav={showNav} />
            </Transition>

            <div
                className={`flex-grow-1 ${
                    showNav && !isMobile ? 'ms-240' : ''
                }`}
                // style={{transition: 'margin 400ms'}}
                style={{
                    transition: 'all 0.6s',
                    left: showNav ? '280px' : '0',
                    right: '0',
                }}
            >
                <main
                    className="p-4 mt-5  bg-light"
                    style={{
                        transition: 'all 0.6s',
                        left: showNav ? '280px' : '0',
                        right: '0',
                    }}
                >
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
