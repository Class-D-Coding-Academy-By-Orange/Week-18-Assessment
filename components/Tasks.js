// Q3: Tasks Component (there are 8 mistakes)

import React, { Component } from 'react';
// WRITE || EDIT THE CODE UNDER THIS LINE
import Item from './Item';

// WRITE || EDIT THE CODE UNDER THIS LINE
export default class Tasks extends Component {
  state = {
    day: "Sat"
  };
  changeDay() {
    // WRITE || EDIT THE CODE UNDER THIS LINE
    this.setState({day:'Sun'});
  }
  render() {
    return (
      <div>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <h1>{this.state.day}</h1>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <button onClick={this.changeDay}>Change Tasks State</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE*/}
        <button onClick={this.props.changeTitle}>Change App State</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE *2 */}
        this.props.todos.map((elem,i)=>{
          <Item e={elem}>
        })
      </div>
    );
  }
}