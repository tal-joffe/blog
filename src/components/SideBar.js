/**
 * Created by Tal on 7/11/17.
 */
import React from 'react';
import PostLinkList from './PostLinkList'

class SideBar extends React.Component {

    render() {
        return (
            <div>
                <h2>Posts</h2>
                <PostLinkList/>
            </div>
        )
    }
}

export default SideBar;
