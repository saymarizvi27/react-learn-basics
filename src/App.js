import React, { Component, useState } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';
// import Radium ,{StyleRoot} from 'radium';
import styled from 'styled-components';

//Class Based 

const StyledButton =styled.button`
background-color: ${props => props.alt? 'red':'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover{
  background-color :  ${props => props.alt? 'salmon':'lightgreen'};
  color: black 
}
`

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max', age: 20, id: 1
      },
      {
        name: 'Sayma', age: 18, id: 2
      },
      {
        name: 'Harsh', age: 26, id: 3
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const person = this.state.persons;
    //Better practice as it creates a copy it is better approach

    const person = [...this.state.persons]
    person.splice(personIndex, 1);
    this.setState({ persons: person })
  }

  togglePersonHandler = () => {
    this.setState({ showPersons: !(this.state.showPersons) });
  }

  render() {
    //Inline Styles
    let style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor : 'lightgreen',
        color: 'black' 
      }
    }

    let btnClass =[classes.Button];


    // const classes = [];
    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      // classes.push('red');
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      // classes.push('bold');
      assignedClasses.push(classes.bold);
    }

  
    let person = null;
    //Better way and cleaner way and preferred way
    //Using map and make a cleaner code
    //Keys help React identify which items have changed (added/removed/re-ordered). To give a unique identity to every element inside the array, a key is required.

    // read this article for interview purpose 
    // https://adhithiravi.medium.com/why-do-i-need-keys-in-react-lists-dbb522188bbb#:~:text=Keys%20help%20React%20identify%20which,array%2C%20a%20key%20is%20required.&text=Each%20item%20in%20the%20array,a%20key%20for%20each%20item.
    if (this.state.showPersons) {
      btnClass.push(classes.Red)
      // style.backgroundColor = 'red'
      // style[':hover'] ={
      //   backgroundColor : 'salmon',
      //   color: 'black' 
      // }


      person =
        (
          <div>
            {this.state.persons.map((person, index) => {
              return (<Person name={person.name}
                age={person.age}
                onClick={() => { this.deletePersonHandler(index) }}
                key={person.id}
                changed={(event) => { this.nameChangeHandler(event, person.id) }
                } />)
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
      // <StyleRoot>
        <div className={classes.App}>
        <h1>Hello World</h1>
        {/* <p className={classes.join(' ')}>This is really working</p> */}
        <p className={assignedClasses.join(' ')}>This is really working</p>
        {/*Second method is inefficient should avoid usind it*/}
        {/* <button onClick={this.switchNameHandler.bind(this,'harry')}>Switch Names</button> */}
        {/* <button style={style} onClick={(() => this.switchNameHandler('harry!!!!'))}>Switch Names</button> */}
        <button className={btnClass.join(' ')} onClick={this.togglePersonHandler}>Switch Names</button>
        {/* <StyledButton onClick={this.togglePersonHandler} alt={this.state.showPersons}>Switch Names</StyledButton> */}
        {person}
      </div>
      // </StyleRoot>

    );
  }
}

// export default Radium(App);
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