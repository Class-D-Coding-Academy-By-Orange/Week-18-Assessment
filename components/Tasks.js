// Q3: Tasks Component (there are 8 mistakes)

import React, { Component } from "react";
// WRITE || EDIT THE CODE UNDER THIS LINE
// import Tasks from './Item';
import Item from "./Item";

// WRITE || EDIT THE CODE UNDER THIS LINE
// class Tasks extends Component {
export default class Tasks extends Component {
  state = {
    day: "Sat"
  };
  changeDay() {
    // WRITE || EDIT THE CODE UNDER THIS LINE
    // day = 'Sun'
    this.setState({
      day: "Sun"
    });
  }

  render() {
    return (
      <div>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        {/* <h1>Tasks Component: state.day</h1> */}
        <h1>Tasks Component: {this.state.day}</h1>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        {/* <button onClick={changeDay}>Change Tasks State</button> */}
        <button onClick={this.changeDay}>Change Tasks State</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE*/}
        {/* <button onClick={changeTitle}>Change App State</button> */}
        <button onClick={this.props.changeTitleFromChild}>
          Change App State
        </button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE *2 */}
        {this.props.tasks.map(elem => {
          return <Item e={elem} />;
        })}
      </div>
    );
  }
}
