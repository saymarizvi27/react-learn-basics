import React from 'react';
import classes from './Person.css';
// import Radium from 'radium';
// import styled from 'styled-components';

//This is stateLess component

// const StyledDiv = styled.div`
//   width:50%;
//   margin:auto; 
//   margin-bottom: 10px;
//   margin-top: 10px;
//   /*center using margin auto*/
//   border:1px solid #eee;
//   box-shadow:0 2px 3px #ccc;
//   padding: 10px;
//   text-align: center;
//   @media (min-width :500 px){
//       width: 450px;
//   }
// `;


const person = (props) => {
    // const style = {
    //     '@media (min-width:500px)': {
    //         width: '450px'
    //     }
    // }
    return (
        //   <div className ="Person" style ={style}>
        // <StyledDiv>
        <div className={classes.Person}> 
            <p onClick={props.onClick}>I am a {props.name} and I am {props.age} years old!</p>
            {/*This is children*/}
            {props.children}
            {/*Two way binding*/}
            <input type="text" onChange={props.changed} value={props.name} />
            </div>
        // </StyledDiv>
          //</div>
          )
}

// export default Radium(person);
export default person;