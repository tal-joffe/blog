import React, { Component } from 'react';
import './style/App.css';
import Header from "./components/Header"
import SideBar from "./components/SideBar";
import PostContent from "./components/PostContent";
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <PostContent/>
          <SideBar/>
          <Footer/>
      </div>
    );
  }
}

const initialState = {
    postLinks: [{id:123, text:'hello', show: true},{id:124, text:'hi', show: false},{id:125, text:'previet', show: false}]
};

export default App;
