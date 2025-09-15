import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Nav, Navbar, Button, Col } from 'react-bootstrap';
// import logo from '../../assets/images/FTC.png';
import { SiGnuprivacyguard } from 'react-icons/si';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    {/* Logo on the left */}
                    <Navbar.Brand as={Link} to="/">
                        {/* <img
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Fixware Logo"
                        /> */}
                    </Navbar.Brand>
                    {/* Left side navigation links */}
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/document">
                            Documents
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            About
                        </Nav.Link>
                    </Nav>
                    {/* Right side buttons: register, login, logout */}
                    <Nav className="ms-auto d-flex align-items-center">
                        <Col xs="auto">
                            <Button
                                variant="primary"
                                size="md"
                                href="/register"
                            >
                                <SiGnuprivacyguard /> Register
                            </Button>
                        </Col>

                        <Col xs="auto" className="ms-2">
                            <Button variant="success" size="md" href="/login">
                                <SiGnuprivacyguard /> Login
                            </Button>
                        </Col>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default Header;
