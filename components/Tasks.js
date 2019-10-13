// Q3: Tasks Component (there are 8 mistakes)

import React, { Component } from 'react';
// WRITE || EDIT THE CODE UNDER THIS LINE
import Item from './components/Item';

// WRITE || EDIT THE CODE UNDER THIS LINE
class Tasks extends Component {
  state = {
    day: 'Sat'
  };
  changeDay() {
    // WRITE || EDIT THE CODE UNDER THIS LINE 
    this.setState.day = 'Sun'
  }
  render() {
    return (
      <div>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <h1>Tasks Component: {this.state.day}</h1>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <button onClick={this.changeDay}>Change Tasks State</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE*/}
        <button onClick={this.props.changeTitle}>Change App State</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE *2 */}
        {/* done */}
        {todos.map((elem,i)=>{
          return <Item todo={elem}>
        })}
      </div>
    );
  }
}