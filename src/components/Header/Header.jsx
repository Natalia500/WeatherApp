import React from "react";
import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";
import "./Header.css";
//import logo from './img/logo.png';
import logo from '../../img/logo.png'
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { NavLink, BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


//import Main from '../../components/Main/Main';
// import Interesting from '../../components/Interesting/Interesting';
// import Signs from '../../components/Signs/Signs';


const Header = () => {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">

                        <img
                            src={logo} height="40" width="70"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Головна</Nav.Link>
                            <Nav.Link href="/interesting">Це цікаво</Nav.Link>
                            <Nav.Link href="/signs">Народні прикмети</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/interesting" component={Interesting} />
                    <Route exact path="/signs" component={Signs} />
                </Switch>
            </Router> */}
        </>
    );
}

export default Header;


