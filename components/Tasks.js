// Q3: Tasks Component (there are 8 mistakes)

import React, { Component } from 'react';
// WRITE || EDIT THE CODE UNDER THIS LINE
import Item from './Item'; // Edited/Fixed

// WRITE || EDIT THE CODE UNDER THIS LINE
export default class Tasks extends Component { // Edited
  state = {
    day: "Sat"
  };
  changeDay() {
    // WRITE || EDIT THE CODE UNDER THIS LINE
    day = Date() //Edited
  }
  render() {
    return (
      <div>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <h1>{this.state.day}</h1> 
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <button onClick={this.changeDay}>Change Tasks State</button> //done
        {/* WRITE || EDIT THE CODE UNDER THIS LINE*/} 
        <button onClick={this.props.changeTitleFromChild()}>Change App State</button> //done
        {/* WRITE || EDIT THE CODE UNDER THIS LINE *2 */}
        this.props.tasks.map(elem)=>{       //Edited
          return <Item e={elem}/>           //Edited
        }
      </div>
    );
  }
}