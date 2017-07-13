import React, { Component } from 'react';
import './style/App.css';
import Header from "./components/Header"
import SideBar from "./components/SideBar";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <SideBar/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
