/**
 * Created by Tal on 7/11/17.
 */
import React from 'react';
import { Link } from 'react-router-dom'
import ReactPDF from 'react-pdf'
import cvFile from '../data/talCV.pdf'

//todo: add download cv button

class CV extends React.Component {

    render() {
        return (
            <div className="cv">
                <ReactPDF file= {cvFile} />
            </div>
        )
    }
}

export default CV;
