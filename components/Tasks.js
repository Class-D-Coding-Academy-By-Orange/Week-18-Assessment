// Q3: Tasks Component (there are 8 mistakes)

import React, { Component } from 'react';
// WRITE || EDIT THE CODE UNDER THIS LINE
import Tasks from './Item'

// WRITE || EDIT THE CODE UNDER THIS LINE
class Tasks extends Component {
  state = {
    day: "Sat"
  };
  changeDay() {
    // WRITE || EDIT THE CODE UNDER THIS LINE
    this.setState().day ='Sun';
  }
  

  render() {
    return (
      <div>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <h1>Tasks Component: {this.state.day}</h1>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <button onClick={this.state.changeDay()}>Change Tasks State</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE*/}
        <button onClick={changeTitleFromChild()}>Change App State</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE *2 */}
        todos.map((elem)=>{
          return <Item e={this.props.elem}>
        })
      </div>
    );
  }
}