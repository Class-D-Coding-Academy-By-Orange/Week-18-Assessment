// Q4: Item Component (there are 3 mistakes)
import React, { Component , Fragment } from 'react';
import Task from './Task';

{/* WRITE || EDIT THE CODE UNDER THIS LINE */}
export class Item extends Component {
  render() {
    return (
      <Fragment>
        <h1>Item Component:</h1>
        {this.props.elem}
        {/* WRITE || EDIT THE CODE UNDER THIS LINE * 2 */}
        <p>elem</p>
      </Fragment>
    );
  }
}


