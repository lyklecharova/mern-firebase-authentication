import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <div className="d-flex flex-column min-vh-100 bg-light">
                <main className="flex-grow-1">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Layout;
