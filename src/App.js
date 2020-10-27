import './App.css';
import React from 'react';

import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {todos:[{id: 1, content: 'buy some milk'}, {id: 2, content: 'wash the dishes'}]}

    this.deleteTodo = this.deleteTodo.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  deleteTodo(todoId) {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== todoId
    })
    this.setState({todos: todos})
  }

  addTodo(todo) {
    this.setState((state) => ({
      todos: [...state.todos, todo]
    }))
  }
  render() {
    return (
    <div className="App">
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo addTodo={this.addTodo} />
    </div>
    )
  };
}

export default App;
