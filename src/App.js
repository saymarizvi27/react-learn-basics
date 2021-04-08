import React, { Component, useState } from 'react';
import './App.css';
import person from './Person/Person.js';
import Person from './Person/Person.js';

//Class Based 
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
    ],
    showPersons: false
  }

  //Do not use this,switchNameHandler() 
  //because it will execute immediately as soon as the dom is rendered
  switchNameHandler = (nameGiven) => {
    //to update the state in class based 
    this.setState({
      persons: [
        {
          name: nameGiven, age: 20
        },
        {
          name: 'Saymi', age: 18
        },
        {
          name: 'Harsh', age: 26
        }
      ]
    })
  }

  nameChangeHandler = (event) => {
    console.log("nameChangeHandler");
    this.setState({
      persons: [
        {
          name: 'Manu', age: 20
        },
        {
          name: event.target.value, age: 18
        },
        {
          name: 'Harsh', age: 26
        }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const person = this.state.persons;
    //Better practice as it creates a copy it is better approach
     
    const persons =[...this.state.persons]
    person.splice(personIndex, 1);
    this.setState({ persons: person })
  }

  togglePersonHandler = () => {
    this.setState({ showPersons: !(this.state.showPersons) });
  }

  render() {
    //Inline Styles
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let person = null;
    //Better way and cleaner way and preferred way
    //Using map and make a cleaner code
    if (this.state.showPersons) {
      person =
        (
          <div>
            {this.state.persons.map((person, index) => {
              return (<Person name={person.name}
                age={person.age}
                onClick={() => { this.deletePersonHandler(index) }} />)
            })}
            {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
              switchNameHandler={this.switchNameHandler.bind(this, 'Megan')}
              nameChangeHandler={this.nameChangeHandler}>My Hobbies:Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
          </div>
        );
    }

    return (
      <div className="App">
        <h1>Hello World</h1>
        {/*Second method is inefficient should avoid usind it*/}
        {/* <button onClick={this.switchNameHandler.bind(this,'harry')}>Switch Names</button> */}
        {/* <button style={style} onClick={(() => this.switchNameHandler('harry!!!!'))}>Switch Names</button> */}
        <button style={style} onClick={this.togglePersonHandler}>Switch Names</button>
        {person}
      </div>

    );
  }
}

export default App;


//This is stateful component
//Function Based
// const app = (props) =>{
//   const [ personState, setPersonsState] = useState({
//       persons: [
//       {
//         name: 'Max', age: 20
//       },
//       {
//         name: 'Sayma', age: 18
//       },
//       {
//         name: 'Harsh', age: 26
//       }
//     ],
//     otherState:'some other value'

//   })

//   const switchNameHandler = () => {
//       //to update the state in class based
//       //otherState gets removed when we update setPersonState 
//       setPersonsState({
//         persons:[
//         {
//           name: 'Maxo', age: 20
//         },
//         {
//           name: 'Saymi', age: 18
//         },
//         {
//           name: 'Harsh', age: 26
//         }
//       ]})
//   }
//   return (
//           <div className="App">
//             <h1>Hello World</h1>
//             <button onClick={switchNameHandler}>Switch Names</button>
//             <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//             <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies:Racing</Person>
//             <Person name={personState.persons[2].name} age={personState.persons[2].age} />
//           </div>
//         );

// }


//export default app;