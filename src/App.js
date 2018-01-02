import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ToDoContainer from './containers/ToDoContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ToDoContainer/>
        </div>
      </Router>
    );
  }
}

export default App;
