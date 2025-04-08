import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar className='navbar'>
                <Container>
                    <Nav>
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/product'>Product</Nav.Link>
                        <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;