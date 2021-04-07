import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max', age: 20
      },
      {
        name: 'Sayma', age: 18
      },
      {
        name: 'Harsh', age: 26
      }
    ]
  }
  
  //Do not use this,switchNameHandler() 
  //because it will execute immediately as soon as the dom is rendered
  switchNameHandler = () => {
      //to update the state in class based 
      this.setState({
        persons:[
        {
          name: 'Maxo', age: 20
        },
        {
          name: 'Saymi', age: 18
        },
        {
          name: 'Harsh', age: 26
        }
      ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies:Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].name} />
      </div>

    );
  }
}

export default App;
