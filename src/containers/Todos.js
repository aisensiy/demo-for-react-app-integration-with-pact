import React from 'react';
import { connect } from 'react-redux';
import TodosView from '../components/Todos';

import { loadTodos } from '../actions/todos';

class Todos extends React.Component {
    componentWillMount() {
        this.props.loadTodos();
    }

    render() {
        return <TodosView todos={this.props.todos}/>
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps, {
    loadTodos
})(Todos);


