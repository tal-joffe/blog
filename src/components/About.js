/**
 * Created by Tal on 7/13/17.
 */


import React from 'react'
import { Grid, Row, Col} from 'react-bootstrap'

const About = () => (
    <div className="post-tab">
        <Grid>
            <Row>
                <Col md={8}>
                    <div className="about">
                        <section>
                        <h1>about</h1>
                        <article>
                            <p>For the past 8 years I had various positions - developer, Team Lead, project manager and systems engineer,
                                <br />
                                and worked with various technologies (from video streaming and network cummunication to big data and cloud computing)
                                <br />
                                Mostly writing Java Scala Python and SQL.
                                <br /><br />
                                Currently I'm changing technologies again and am moving to the web application world.
                                <br />This site was created as a learning project for me and a place to share my thoughts on my latest technoloigcal transition.
                                <br /><br />I hold a Bsc in Computers Engineering and an MBA from the Technion university.
                                <br /><br />I live in Hadera Israel with my lovely wife and 2 amazing kids.
                                <br />Other than software, I enjoy playing basketball, playing with my kids and playing computer games (not in that order necessarily :) )
                                <br /><br /></p>
                        </article>
                        </section>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>

)

export default About