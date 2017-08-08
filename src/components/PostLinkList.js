/**
 * Created by Tal on 7/13/17.
 */


import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Search from 'react-search'
import '../style/react-search.css';

//todo: use some sidebar styling for postlinks


function extractTags(posts) {
    const tags = posts.map((post)=>post.tags)
    const flattenTags = [].concat(...tags)
    const uniqueFlattenTags =  [...new Set(flattenTags)]
    return uniqueFlattenTags
}

const PostLink = ({
                      onClick,
                      show,
                      title
                  }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration:
                show ?
                    'font-weight' : 'bold'
        }}
    >
        {title}
    </li>
)


const PostLinkList = ({
                          postLinks,
                          onPostLinkClick
                      }) => (
    <div className="side-bar">
        <h2>Posts</h2>
        <h4>Search post by title</h4>
        <Search items={postLinks.map((post)=>{return {id: post.id, value: post.title}})} />
        <h4>Search post by tags</h4>
        <Search items={extractTags(postLinks).map((tag)=>{return {id: tag, value: tag}})} />
    </div>
)
PostLinkList.propTypes = {
    postLinks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            driveID: PropTypes.string.isRequired,
            show: PropTypes.bool.isRequired,
            content: PropTypes.string,
            postDate: PropTypes.string.isRequired,
            tags:PropTypes.arrayOf(PropTypes.string.isRequired)

        }).isRequired
    ).isRequired,
    onPostLinkClick: PropTypes.func.isRequired
}

export default PostLinkList