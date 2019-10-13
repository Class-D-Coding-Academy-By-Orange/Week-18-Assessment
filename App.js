// Q2: App Component (there are 7 mistakes)

// WRITE || EDIT THE CODE UNDER THIS LINE
import React, { Component } from 'react';                                               //1
import Tasks from "./components/Tasks";

export default class App extends Component {
  state = {
    title: "ELIZABETH GREENE",
    todos: ["eat", "eat eat", "eat again"]
  };
  changeTitle() {
    // WRITE || EDIT THE CODE UNDER THIS LINE
    //state.title = 'AGGREGOR ZOLDYCK'
    this.setState({ title: "AGGREGOR ZOLDYCK" });                                         //2
  }
  render() {
    return (
      <div>                                                                         {/* 3 */}
                                                                                    
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}

        <h1>App Component:{this.state.title}</h1>                                   {/*4*/ }
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <button onClick={this.changeTitle()}>Change Title</button>                  {/*5*/ }
        {/* WRITE || EDIT THE CODE UNDER THIS LINE*2 */}
        <Tasks tasks={this.state.todos} changeTitleFromChild={this.changeTitle} /> {/*6,7*/ }
      </div>
    );
  }
}
