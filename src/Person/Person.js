import React from 'react';

const person = (props) =>{

      return (
      <div>
          <p>I am a {props.name} and I am {props.age} years old!</p>
          {/*This is children*/}
          {props.children}
          </div>)
}

export default person;