// Q2: App Component (there are 7 mistakes)

// WRITE || EDIT THE CODE UNDER THIS LINE
import React, { Component ,Fragment } from 'react';
import Tasks from './components/Tasks';

export default class App extends Component {
  state = {
    title: 'ELIZABETH GREENE',
    todos: ['eat', 'eat eat', 'eat again']
  };
  changeTitle =() =>{
    // WRITE || EDIT THE CODE UNDER THIS LINE
    //  this.state.title = 'AGGREGOR ZOLDYCK'
     this.setState({title : 'AGGREGOR ZOLDYCK'})
  }
  render() {
    return (

      <Fragment>
      <Tasks tasks={this.state.todos} changeTitleFromChild={this.changeTitle} />     

      <h1>App Component: {this.state.title}</h1>
      <button onClick={this.changeTitle}>Change Title</button>
      </Fragment>
      
    )
  }
}
