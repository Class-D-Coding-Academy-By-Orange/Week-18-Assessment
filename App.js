// Q2: App Component (there are 7 mistakes)

// WRITE || EDIT THE CODE UNDER THIS LINE
import React, { Component } from "react"; //MISTAKE
import Tasks from "./components/Tasks";

export default class App extends Component {
  state = {
    title: "ELIZABETH GREENE",
    todos: ["eat", "eat eat", "eat again"]
  };
  changeTitle(x) {
    // WRITE || EDIT THE CODE UNDER THIS LINE
    this.setState = { title: x };
    // state.title = 'AGGREGOR ZOLDYCK'  MISTAKE
  }
  render() {
    return (
      /* WRITE || EDIT THE CODE UNDER THIS LINE */
      <div>
        /* WRITE || EDIT THE CODE UNDER THIS LINE */
        <h1>{this.state.title}</h1>
        /* WRITE || EDIT THE CODE UNDER THIS LINE */
        <button onClick={this.changeTitle}>Change Title</button>
        /* WRITE || EDIT THE CODE UNDER THIS LINE*2 */
        <Tasks tasks={this.todos} changeTitleFromChild={this.changeTitle} />
      </div>
    );
  }
}
