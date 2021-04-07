import React from 'react';

//This is stateLess component
const person = (props) =>{

      return (
      <div>
          <p onClick={props.switchNameHandler}>I am a {props.name} and I am {props.age} years old!</p>
          {/*This is children*/}
          {props.children}
          {/*Two way binding*/}
          <input type="text" onChange={props.nameChangeHandler} value={props.name}/>
          </div>)
}

export default person;