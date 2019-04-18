import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Selector extends Component {
  render() {
    return (
      <div className="container">
        <div className="navbar">
          <div>Selected: </div>
          <div>What goes here?</div>
        </div>
        <div className="shape-list">
        Add the Shape Components here!
        </div>
      </div>
    );
  }
}

export default Selector;
