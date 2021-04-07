import React from 'react';

//This is stateLess component
const person = (props) =>{

      return (
      <div>
          <p onClick={props.switchNameHandler}>I am a {props.name} and I am {props.age} years old!</p>
          {/*This is children*/}
          {props.children}
          </div>)
}

export default person;