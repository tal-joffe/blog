/**
 * Created by Tal on 7/11/17.
 */
import React from 'react';
import { Link } from 'react-router-dom'


//todo: Add image, add Linkedin and Stackoverflow links

class Header extends React.Component {

    render() {
        return (
            <div className="App-header">
                <h2>Title</h2>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
            </div>
        )
    }
}

export default Header;
