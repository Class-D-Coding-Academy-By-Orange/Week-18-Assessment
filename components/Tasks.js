// Q3: Tasks Component (there are 8 mistakes)

import React, { Component } from 'react';
// WRITE || EDIT THE CODE UNDER THIS LINE
import Tasks from './Item';

// WRITE || EDIT THE CODE UNDER THIS LINE
class Tasks extends Component {
  state = {
    day: "Sat"
  };
  changeDay() {
    // WRITE || EDIT THE CODE UNDER THIS LINE
    day = 'Sun'
  }
  render() {
    return (
      <div>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <h1>Tasks Component: state.day</h1>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <button onClick={changeDay}>Change Tasks State</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE*/}
        <button onClick={changeTitle}>Change App State</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE *2 */}
        todos.map((elem)=>{
          return <Item e={elem}>
        })
      </div>
    );
  }
}