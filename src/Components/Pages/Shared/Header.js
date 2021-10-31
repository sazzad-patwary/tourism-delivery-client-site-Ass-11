
import React from 'react';
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    // const { user, logOut } = useFirebase();
    const { user, logOut } = useAuth()
    return (
        <div className="sticky-top">
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Travel World</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
                            <Nav.Link ><Link to="/shop">Shop</Link></Nav.Link>
                            <Nav.Link ><Link to="/about">About</Link></Nav.Link>
                            <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                        </Nav>

                        {
                            user.email ?

                                <div className="d-flex">
                                    <Nav.Link ><Link to="/myorders">MyOrders</Link></Nav.Link>
                                    <Nav.Link><Link to="/manageallordes">ManageAllOrdes</Link></Nav.Link>
                                    <Nav.Link><Link to="/addnewservice">AddNewService</Link></Nav.Link>

                                    <p className="pe-2">{user.displayName}</p>
                                    <Button onClick={logOut} variant="primary">LogOut</Button>
                                </div>
                                :

                                <Nav.Link><Link to="/login">Login</Link></Nav.Link>

                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;