// Q2: App Component (there are 7 mistakes)

// WRITE || EDIT THE CODE UNDER THIS LINE
import React, { Component } from 'react';
import Tasks from './components/Tasks';

export default class App extends Component {
  state = {
    title: 'ELIZABETH GREENE',
    todos: ['eat', 'eat eat', 'eat again']
  };
  changeTitle() {
    // WRITE || EDIT THE CODE UNDER THIS LINE
    this.setState({title:'AGGREGOR ZOLDYCK'});
  }
  render() {
    return (
      // const {state,changeTitle}=this;
      // const {todos}=state;

      {/* WRITE || EDIT THE CODE UNDER THIS LINE */ }
      < div >
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */ }
        < h1 >{this.state.title}</h1 >
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */ }
        < button onClick = { this.changeTitle } > Change Title</button >
          {/* WRITE || EDIT THE CODE UNDER THIS LINE*2 */ }
        < Tasks tasks = { this.state.todos } changeTitleFromChild = { this.changeTitle } />
      </div >
    )
  }
}
