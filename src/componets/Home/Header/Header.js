import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const { users, logOut } = useFirebase();
    const ab = useAuth();
    const clearUser = () => {
        logOut();
        localStorage.removeItem('user')
    }
    console.log(users)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">TOURIMO TRAVEL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/mybooking">My Booking</Nav.Link>
                            <Nav.Link as={Link} to="/managebooking">Manage Booking</Nav.Link>
                            <Nav.Link as={Link} to="/addpackage">Add package</Nav.Link>
                        </Nav>
                        <Nav>
                            <Navbar.Brand href="#home">{users?.displayName}</Navbar.Brand>
                            <h6 className="text-light"></h6>

                            {
                                users?.email ? <button button onClick={clearUser} className="btn btn-dark">Log out</button> : <Link to='/login'>  <button className="btn btn-dark">Log in</button></Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;