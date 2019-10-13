// Q2: App Component (there are 7 mistakes)

// WRITE || EDIT THE CODE UNDER THIS LINE
import React , {Component} from 'React'; //1
import Tasks from './components/Tasks';

export default class App extends Component {
  state = {
    title: 'ELIZABETH GREENE',
    todos: ['eat', 'eat eat', 'eat again']
  };
  changeTitle =()=> {     //3
    // WRITE || EDIT THE CODE UNDER THIS LINE
    this.setState.title = 'AGGREGOR ZOLDYCK'  //4
  }
  render() {
    return ( <> 
      {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
      {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
      <h1 AppComponent={this.state.title} >AppComponent = {this.state.title}</h1> 
      {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
      <button onClick={this.changeTitle}>Change Title</button> //6
      {/* WRITE || EDIT THE CODE UNDER THIS LINE*2 */}
      <Tasks tasks={this.state.todos} changeTitleFromChild={changeTitle} /> //7
      </>
    )
  }
}
