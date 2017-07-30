/**
 * Created by Tal on 7/13/17.
 */

import React, { Component } from 'react'
import { Label } from 'react-bootstrap'


//todo: add search option for posts. will probably need to add post metadata for search

const Tags = ({tags}) => (
    <div>
        {tags.map(tag =>
            <Label key={tag}>{tag} </Label>
        )}
    </div>
)


class PostContent extends Component {

    render() {
        // const { markdown } = this.state;
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return (
                //todo: add loading animation
                <div>
                    <section>
                        <article> loading....</article>
                    </section>
                </div>
            )
        }
        return (
            <div>
                <header>
                    <h1>{this.props.title}</h1>
                    <p className="postDateSubTitle">{this.props.postDate}</p>
                </header>
                <section>
                    <article dangerouslySetInnerHTML={{__html: this.props.content}}></article>
                </section>
                <Tags tags={this.props.tags}/>
            </div>
        )
    }
    componentDidMount() {
        this.props.fetchAndDisplayPostInContent(this.props.defaultPost.id,this.props.defaultPost.driveID)
    }
}

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

export default PostContent;