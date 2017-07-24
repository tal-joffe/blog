/**
 * Created by Tal on 7/11/17.
 */
import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

//todo: Add image, add social media links
//todo: think about navbar... might want to use something else

const Header = () => (
    <div className="App-header">
        <h2>Title</h2>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
    </div>
)


// <Navbar>
// <Navbar.Header>
// <Navbar.Brand>
// <h2>Tal's site</h2>
// </Navbar.Brand>
// </Navbar.Header>
// <Nav>
// <LinkContainer to="/blog">
//     <NavItem eventKey={1}>Blog</NavItem>
//     </LinkContainer>
//     <LinkContainer to="/about">
//     <NavItem eventKey={2}>About</NavItem>
//     </LinkContainer>
//     </Nav>
//     </Navbar>

export default Header;
