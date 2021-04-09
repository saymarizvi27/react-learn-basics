import React from 'react';
import  './Person.css';
import Radium from 'radium';

//This is stateLess component
const person = (props) =>{
      const style ={
          '@media (min-width:500px)' :{
              width: '450px'
          }
      }
      return (
      <div className ="Person" style ={style}>
          <p onClick={props.onClick}>I am a {props.name} and I am {props.age} years old!</p>
          {/*This is children*/}
          {props.children}
          {/*Two way binding*/}
          <input type="text" onChange={props.changed} value={props.name}/>
          </div>)
}

export default Radium(person);