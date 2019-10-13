// Q2: App Component (there are 7 mistakes)

// WRITE || EDIT THE CODE UNDER THIS LINE
import React, { Component } from 'react'; //1
import Tasks from './components/Tasks';

export default class App extends Component {
  state = {
    title: 'ELIZABETH GREENE',
    todos: ['eat', 'eat eat', 'eat again']
  };
  changeTitle() {
    // WRITE || EDIT THE CODE UNDER THIS LINE
    this.state.title = 'AGGREGOR ZOLDYCK'//2
  }
  render() {
    return (
      // {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
      // {/* WRITE || EDIT THE CODE UNDER THIS LINE */}

      <h1>App Component: {this.state.title}</h1>//3
      <h1>todos: {this.state.todos}</h1>//4

      // {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
      <button onClick={this.changeTitle}>Change Title</button>//4
      // {/* WRITE || EDIT THE CODE UNDER THIS LINE*2 */}
      <Tasks tasks={tasks} changeTitleFromChild={this.state.changeTitle} />//5,6
    );
  }
}
