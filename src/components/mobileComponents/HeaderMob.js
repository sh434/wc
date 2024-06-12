import React from 'react'
import { COMPANY_LOGO } from '../../assets/urls'
import { ALL_EVENTS } from '../../assets/constants/events'
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'

import './module.css'

const HeaderMob = () => {

    return (
        <Navbar expand="lg" className='header'>
            <Container>
                <Navbar.Brand > <img
                    src={COMPANY_LOGO}
                    alt="company_logo"
                    className="img-fluid header-logo"
                /></Navbar.Brand>
                <input id="toggleChecker" type="checkbox" />
                <label id="togglerLable" htmlFor="toggleChecker">
                    <div className="checkboxtoggler">
                        <div className="line-1" />
                        <div className="line-2" />
                        <div className="line-3" />
                    </div>
                </label>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#another">Another Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default HeaderMob