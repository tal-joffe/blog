/**
 * Created by Tal on 7/13/17.
 */

import React, { Component } from 'react'
import marked from "marked"
import config from '../config'


//todo: read posts from posts library
//todo: add search option for posts. will probably need to add post metadata for search


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
                </header>
                <section>
                    <article dangerouslySetInnerHTML={{__html: this.props.content}}></article>
                </section>
            </div>
        )
    }
}

export default PostContent;