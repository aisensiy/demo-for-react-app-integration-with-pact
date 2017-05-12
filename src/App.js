import React, { Component, PropTypes } from 'react';
import './App.css';
import Todos from './containers/Todos';

class App extends Component {
  render() {
    let { todos } = this.props;
    return (
      <div className="App">
       <Todos/>
      </div>
    );
  }
}

export default App;
