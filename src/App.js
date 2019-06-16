import React, { Component } from 'react';
import './App.css';
import "./css_styles/styles.css";
import SideBar from "./items/sidebar";
import Merchandising from './projects/Merchandising';
import Experience from './projects/Experience';
import Home from './projects/Home';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  state = {
    collapseID: '',
    isOpen: false,
    sidebarOpen: true,
    visible: false
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Router> 
      <div className="App">
        <div id="App">
          <SideBar />
          <div className="topnav">
            <h3>QA Dashboard</h3>
          </div>
          <div id="page-wrap">
            {/* <h2>QA dashboard</h2> */}
            {/* <h5>Click on the nav menu to view details of each project</h5> */}
            <Route path='/home' component={Home}></Route>
            <Route path='/merchandising' component={Merchandising}></Route>
            <Route path='/experience' component={Experience}></Route>
          </div>
        </div>
      </div>
</Router>
    );
  }   
}
export default App;
