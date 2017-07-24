/**
 * Created by Tal on 7/11/17.
 */
import React from 'react';
import { Link } from 'react-router-dom'
import ReactPDF from 'react-pdf'
import cvFile from '../data/computer-engineer.pdf'

//todo: structure my cv as a component. like this https://oleg.smetan.in/#/cv or like this: http://jonbloomer.com.au/

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
