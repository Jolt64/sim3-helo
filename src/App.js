import React, { Component } from 'react';
import './App.css';

import Routes from './routes'
import Nav from './Components/Nav/Nav';
import { withRouter } from "react-router";


class App extends Component {
  render() {
    let navHolder = () => {
      if(this.props.location.pathname !== "/") {
        return (
          <div>
            <Nav></Nav>
          </div>
        )
      }
    }
    return (
    <div className="App">
      {navHolder()}
      <Routes/>
    </div>
    )
  }
}

export default withRouter(App);
