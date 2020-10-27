import './App.css';
import React from 'react';

import AddNinja from './AddNinja'
import Ninjas from './Ninjas'

class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {ninjas: [{ id:1, name: "Ryu", age: 30, belt: "Black" }, {id:2, name: "Paulo", age: 22, belt: "Black" }]}

    this.handleNinjaAdd =  this.handleNinjaAdd.bind(this)
  }

  handleNinjaAdd(ninja) {
    this.setState((state) => ({
      ninjas: [...state.ninjas, ninja]
    }))
  }
  
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h1>My first app</h1>
        <p>salve</p>
        <AddNinja handleNinjaAdd={this.handleNinjaAdd}/>
        <Ninjas ninjas={this.state.ninjas} />
      </header>
    </div>
    )
  };
}

export default App;
