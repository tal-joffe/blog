/**
 * Created by Tal on 7/11/17.
 */
import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import MyPic from './MyPic'


//todo: add social media links


import profilePic from '../data/profilePic.png'

const Header = () => (
    <div>
        <div className="App-header">
            <MyPic/>
            <div style={{marginLeft: '60px'}}>
                <h4>Tal Joffe</h4>
                <div style={{fontSize: '.6em', float: 'left'}}>My personal site about software and stuff</div>
            </div>
        </div>
        <Navbar>
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
