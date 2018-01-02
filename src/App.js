import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoContainer from './containers/ToDoContainer'


class App extends Component {
  render() {
    return (
      <div>
        <ToDoContainer/>
      </div>
    );
  }
}

export default App;
