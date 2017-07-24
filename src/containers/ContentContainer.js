/**
 * Created by Tal on 7/16/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import PostContent from '../components/PostContent'


const mapStateToProps = (state, ownProps) => {
    return {
        content: state.postLinks.filter(t=>t.show).map(t=>t.content),
        // postLinks: state.postLinks,
        hasErrored: state.postFetchHasErrored,
        isLoading: state.postIsLoading
     }
}
const ContentContainer = connect(
    mapStateToProps
)(PostContent)





export default ContentContainer