/**
 * Created by Tal on 7/13/17.
 */


import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

//todo: use some sidebar styling for postlinks
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
        <h2>latest posts</h2>
        <ul>
            {postLinks.map(postLink =>
                <PostLink
                    key={postLink.id}
                    {...postLink}
                    onClick={() => onPostLinkClick(postLink.id,postLink.driveID)}
                />
            )}
        </ul>
    </div>
)
        // <ListGroup>
        //
        //     <ListGroupItem onClick={() => onPostLinkClick(postLink.id,postLink.driveID)}></ListGroupItem>
        // </ListGroup>

// PostLinkList.propTypes = {
//     todos: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             completed: PropTypes.bool.isRequired,
//             text: PropTypes.string.isRequired
//         }).isRequired
//     ).isRequired,
//     onPostLinkClick: PropTypes.func.isRequired
// }

export default PostLinkList