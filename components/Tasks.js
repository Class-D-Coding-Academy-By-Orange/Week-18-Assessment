// Q3: Tasks Component (there are 8 mistakes)

import React, { Component } from "react";
// WRITE || EDIT THE CODE UNDER THIS LINE
// import Tasks from './Item';
import Item from "./Item";

// WRITE || EDIT THE CODE UNDER THIS LINE
//  class Tasks extends Component {
export default class Tasks extends Component {
  state = {
    day: "Sat"
  };
  changeDay(x) {
    // WRITE || EDIT THE CODE UNDER THIS LINE
    // day = 'Sun'
    this.setState({ day: x });
  }
  render() {
    return (
      <div>
        /* WRITE || EDIT THE CODE UNDER THIS LINE */
        <h1>{this.state.day}</h1>
        /* WRITE || EDIT THE CODE UNDER THIS LINE */
        <button onClick={this.changeDay}>Change Tasks State</button>
        /* WRITE || EDIT THE CODE UNDER THIS LINE*/
        <button onClick={this.props.changeTitleFromChild.bind(this, x)}>
          Change App State
        </button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE *2 */
        this.props.tasks.map((elem, index) => {
          return <Item e={elem} key={index} />;
        })}
      </div>
    );
  }
}
