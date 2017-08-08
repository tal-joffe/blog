/**
 * Created by Tal on 7/13/17.
 */

import React, { Component } from 'react'
import { Label } from 'react-bootstrap'
import PropTypes from 'prop-types'


//todo: add search option for posts. will probably need to add post metadata for search
//todo: add colors to tag
//todo: add onClick on tags that will redirect to search results for this tag

const Tags = ({tags}) => (
    <div>
        {tags.map(tag =>
            <Label key={tag}>{tag} </Label>
        )}
    </div>
)


class PostContent extends Component {

    render() {
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

PostContent.propTypes = {
    defaultPost: PropTypes.shape({
        id: PropTypes.number.isRequired,
        driveID: PropTypes.string.isRequired,
        show: PropTypes.bool.isRequired,
        content: PropTypes.string,
        postDate: PropTypes.string.isRequired,
        tags:PropTypes.arrayOf(PropTypes.string.isRequired)

    }).isRequired,
    content: PropTypes.string,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    postDate: PropTypes.string.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default PostContent;