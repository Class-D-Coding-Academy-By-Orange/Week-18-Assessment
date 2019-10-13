// Q3: Tasks Component (there are 8 mistakes)

import React, { Component } from 'React'; 
// WRITE || EDIT THE CODE UNDER THIS LINE
import Item from './Item';//1

// WRITE || EDIT THE CODE UNDER THIS LINE
class Tasks extends Component {
  state = {
    day: "Sat"
  };
  changeDay =()=> {
    // WRITE || EDIT THE CODE UNDER THIS LINE
    this.setState({day : 'Sun'}) //2
  }
  render() {
    return (
      <div>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <h1>Tasks Component: {this.state.day}</h1> //3
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <button onClick={changeDay}>Change Tasks State</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE*/}
        <button onClick={changeTitle}>Change App State</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE *2 */}
       
        {
          this.state.map( (elem) => { <Item e={elem}/> })
         }
         
         
            </div>
        
      
    );
  }
}