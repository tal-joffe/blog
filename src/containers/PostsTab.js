/**
 * Created by Tal on 7/16/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import ContentContainer from './ContentContainer'
import PostWrapper from './PostWrapper'
import VisiblePostsList from './VisiblePostsList'
import { Grid, Row, Col} from 'react-bootstrap'

const PostsTab = () => (
    <div className="post-tab">
        <Grid>
            <Row>
                <Col md={8}>
                    <PostWrapper/>
                </Col>
                <Col md={4}>
                    <VisiblePostsList/>
                </Col>
            </Row>
        </Grid>
    </div>
)

export default PostsTab;