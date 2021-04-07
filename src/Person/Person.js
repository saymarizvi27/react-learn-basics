import React from 'react';
import  './Person.css';

//This is stateLess component
const person = (props) =>{

      return (
      <div className ="Person">
          <p onClick={props.switchNameHandler}>I am a {props.name} and I am {props.age} years old!</p>
          {/*This is children*/}
          {props.children}
          {/*Two way binding*/}
          <input type="text" onChange={props.nameChangeHandler} value={props.name}/>
          </div>)
}

export default person;