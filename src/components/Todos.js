import React, { Component, PropTypes } from 'react';

class Todos extends Component {
    render() {
        let { todos } = this.props;
        return (
            <ul className="todos">
                {todos.map((todo, idx) => <li key={idx} className={todo.completed ? 'completed' : ''}>{todo.title}</li>)}
            </ul>
        );
    }
}

export default Todos;

Todos.propTypes = {
  todos: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })
};

Todos.defaultProps = {
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