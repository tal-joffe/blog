/**
 * Created by Tal on 7/11/17.
 */
import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import MyPic from './MyPic'
//todo: Add image, add social media links
//todo: think about navbar... might want to use something else

const Header = () => (
    <div>
        <div className="App-header">
            <h2>Title</h2>
            <MyPic/>
        </div>
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <p>Tal's site</p>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <LinkContainer to="/blog">
                <NavItem eventKey={1} href="#">Blog</NavItem>
                </LinkContainer>
                <LinkContainer to="/cv">
                <NavItem eventKey={2} href="#">CV</NavItem>
                </LinkContainer>
                <LinkContainer to="/about">
                <NavItem eventKey={3} href="#">About</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>

    </div>
)

export default Header;
