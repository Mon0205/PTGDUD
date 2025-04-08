import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap";
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar bg='dark' variant='dark' className='navbar'>
                <Container>
                    <Nav>
                        <h3>Navbar</h3>
                        <Nav.Link className='nav-link' as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className='nav-link' as={Link} to="/product">Product</Nav.Link>
                        <Nav.Link className='nav-link' as={Link} to="/cart">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;