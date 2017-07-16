import './style/App.css';
import React from 'react';
import Header from "./components/Header"
import SideBar from "./components/SideBar";
import Footer from "./components/Footer"


import ContentContainer from './containers/ContentContainer'
import VisiblePostsList from './containers/VisiblePostsList'

const App = () => (
    <div>
        <Header/>
        <ContentContainer/>
        <VisiblePostsList/>
        <Footer/>
    </div>
)

export default App;
