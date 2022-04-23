import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">ProfileWeb</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/gallery">Галерея</Nav.Link>
                    <Nav.Link href="/about">Обо мне</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;