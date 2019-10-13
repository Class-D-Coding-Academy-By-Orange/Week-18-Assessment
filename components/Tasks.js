// Q3: Tasks Component (there are 8 mistakes)

import React, { Component } from 'react';
// WRITE || EDIT THE CODE UNDER THIS LINE
import Item from './Item';//7

// WRITE || EDIT THE CODE UNDER THIS LINE
export default class Tasks extends Component {
  state = {
    day: "Sat"
  };
  changeDay() {
    // WRITE || EDIT THE CODE UNDER THIS LINE
    // day = 'Sun'
    this.setState({ day : "Sun" })
  }
  render() {
    return (
<div>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <h1>{ this.state.day }}</h1>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <button onClick={changeDay}>{this.state.day}</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE*/}

        <button onClick={this.props.changeTitleFromChild}>Change App State</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE *2 */}
       { this.props.tasks.map((elem)=>{
          return (<Item e={elem}>)
        }
        )}
      </div>
    );
  }
}
