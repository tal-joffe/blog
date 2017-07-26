/**
 * Created by Tal on 7/16/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import PostContent from '../components/PostContent'
import { fetchAndDisplayPostInContent } from '../actions'


const mapStateToProps = (state, ownProps) => {
    var activeState = state.postLinks.filter(t=>t.show)[0]
    return {
        defaultPost: state.postLinks[0],
        content: activeState.content,
        title: activeState.title,
        tags: activeState.tags,
        postDate: activeState.postDate,
        hasErrored: state.postFetchHasErrored,
        isLoading: state.postIsLoading
     }
}
const ContentContainer = connect(
    mapStateToProps,
    { fetchAndDisplayPostInContent }
)(PostContent)





export default ContentContainer