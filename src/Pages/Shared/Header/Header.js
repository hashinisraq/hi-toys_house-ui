import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar className="menu-bar" variant="dark" sticky="top" collapseOnSelect expand="lg" style={{ backgroundColor: 'rgb(91, 74, 102)', fontSize: '18px', fontFamily: 'Roboto' }}>
            <Container>
                <Navbar.Brand href="/home"><Navbar.Text style={{ color: 'rgb(33, 23, 28)', fontWeight: '700', border: '1px solid rgb(33, 23, 28)', padding: '2px 5px' }}> HI-Toys House
                </Navbar.Text></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="mx-2" style={{ color: 'black' }} href="/home">Home</Nav.Link>
                    <Nav.Link className="mx-2" style={{ color: 'black' }} href="/toys">Buy-Toys</Nav.Link>
                    {user?.email && <Nav.Link className="mx-2" style={{ color: 'black' }} href="/dashboard">Dashboard</Nav.Link>}
                    {user?.email ? <><Nav.Link style={{ color: 'black' }} to="#" onClick={logOut}>Logout</Nav.Link><Navbar.Text className="px-2"> 💂‍♂️ {user.displayName}</Navbar.Text> </> :
                        <Nav.Link style={{ color: 'black' }} href="/login">Login</Nav.Link>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;