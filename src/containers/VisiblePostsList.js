/**
 * Created by Tal on 7/16/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import { fetchAndDisplayPostInContent } from '../actions'
import PostLinkList from '../components/PostLinkList'


const mapStateToProps = (state) => {
    return {
        postLinks: state.postLinks
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onPostLinkClick: (id,driveID) => {
            dispatch(fetchAndDisplayPostInContent(id,driveID));
        }
    }
}
const VisiblePostsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostLinkList);

export default VisiblePostsList