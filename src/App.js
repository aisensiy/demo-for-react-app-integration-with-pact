import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let { todos } = this.props;
    return (
      <div className="App">
       <ul className="todos">
         {todos.map((todo, idx) => <li key={idx} className={todo.completed ? 'completed' : ''}>{todo.title}</li>)}
       </ul>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })
};

App.defaultProps = {
  todos: [
    {
      title: 'what to do',
      completed: false
    }, 
    {
      title: 'what to do next',
      completed: true
    }
  ]
};

export default App;
