/**
 * Created by Tal on 7/13/17.
 */

import React, { Component } from 'react'
import marked from "marked"
import config from '../config'


// import PathsMixin from '../elements/PathsMixin'
// import { postForPath } from '../paths'

//todo: read posts from posts library

// class PostContent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {markdown: null}
//     }
//
//     // componentWillMount() {
//     //     const id = this.props.driveID
//     //     const url = 'https://www.googleapis.com/drive/v3/files/'+id+'?alt=media&key='+config.googleDriveApiKey
//     //     var setOptions = {
//     //         method: 'GET',
//     //         // headers: setHeaders
//     //     }
//     //     fetch(url,setOptions)
//     //         .then(response => {
//     //             return response.text()
//     //         })
//     //         .then(text => {
//     //             this.setState({
//     //                 markdown: marked(text)
//     //             })
//     //         })
//     //
//     // }
//
//     getMarkedownFromDrive() {
//         const url = 'https://www.googleapis.com/drive/v3/files/' + this.props.driveID + '?alt=media&key=' + config.googleDriveApiKey
//         var setOptions = {
//             method: 'GET',
//             // headers: setHeaders
//         }
//         fetch(url, setOptions)
//             .then(response => {
//                 return response.text()
//             })
//             .then(text => {
//                 this.setState({
//                     markdown: marked(text)
//                 })
//             })
//     }
//
//     render() {
//         // const { markdown } = this.state;
//         return (
//             <div className="post-content">
//                 <section>
//                     <article dangerouslySetInnerHTML={{__html: this.getMarkedownFromDrive()}}></article>
//                 </section>
//             </div>
//         )
//     }
// }



class PostContent extends Component {
    constructor(props) {
        super(props)
    }
    // componentDidMount() {
    //     this.props.fetchData();
    // }

    render() {
        // const { markdown } = this.state;
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div className="post-content">
                <ul>
                    {this.props.postLinks.map((item) => (
                        <li key={item.id}>
                            {item.content}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
//

// const PostContent = ({content}) => (
//     <div className="post-content">
//         <p>{content}</p>
//     </div>
// )

export default PostContent;