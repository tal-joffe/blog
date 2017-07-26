/**
 * Created by Tal on 7/13/17.
 */

import React, { Component } from 'react'
import marked from "marked"
import config from '../config'


//todo: add search option for posts. will probably need to add post metadata for search
//todo: add tag List component to content view

class PostContent extends Component {
    constructor(props) {
        super(props)
    }

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
                    <p className="postDateSubTitle">{this.props.postDate}<time datetime={this.props.postDate} pubdate></time></p>
                </header>
                <section>
                    <article dangerouslySetInnerHTML={{__html: this.props.content}}></article>
                </section>
            </div>
        )
    }
    componentDidMount() {
        this.props.fetchAndDisplayPostInContent(this.props.defaultPost.id,this.props.defaultPost.driveID)
    }
}

export default PostContent;