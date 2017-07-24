import './style/index.css';
import React from 'react';
import { Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import PostsTab from './containers/PostsTab'
import About from './components/About'

const App = () => (
    <div>
        <Header/>
            <div className="main-container">
                    <Route exact path="/" component={PostsTab}/>
                    <Route exact path="/blog" component={PostsTab}/>
                    <Route exact path="/about" component={About}/>
            </div>
        <Footer/>
    </div>
)

export default App;
