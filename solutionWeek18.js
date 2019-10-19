/* Q1:
Convert ES5 to ES6 :
1) 
function sum(x,y){
  return x+y
}
*/
// BOTH CORRECT
const sum=(x,y)=>x+y
const sum2=(x,y)=>{
  return x+y
}

/*
2) 
function consoleReturn(x,y){
  console.log(x)
  return y
}
*/
// CORRECT ANSWER
const consoleReturn=(x,y)=>{
  console.log(x)
  return y
}

// Q2: App Component (there are 7 mistakes)
// IMPOERT REACT LIBRARY
import React, { Component } from 'react';
import Tasks from './components/Tasks';

export default class App extends Component {
  state = {
    title: 'ELIZABETH GREENE',
    todos: ['eat', 'eat eat', 'eat again']
  };
  changeTitle() {
    // USE SETSTATE
    this.setState({title : 'AGGREGOR ZOLDYCK'})
  }
  render() {
    return (
      <div>
        {/* USE DIV */}
        {/* USE THIS AND ADD {} */}
        <h1>App Component: {this.state.title}</h1>
        {/* USE THIS */}
        <button onClick={this.changeTitle}>Change Title</button>
        {/* USE THIS.STATE */}
        {/* USE THIS */}
        <Tasks tasks={this.state.todos} changeTitleFromChild={this.changeTitle} />
      </div>

    )
  }
}

// Q3: Tasks Component (there are 7 mistakes)
import React, { Component } from 'react';
// IMPORT ITEM
import Item from './Item';

// USE EXPORT DEFAULT
export default class Tasks extends Component {
  state = {
    day: "Sat"
  };
  changeDay() {
    // USE SETSTATE
    this.setState({day : 'Sun'})
  }
  render() {
    return (
      <div>
        {/* USE THIS AND ADD {} */}
        <h1>Tasks Component: {this.state.day}</h1>
        {/* USE THIS */}
        <button onClick={this.changeDay}>Change Tasks State</button>
        {/* USE THIS.PROPS AND CHANGETITLEFROMCHILD*/}
        <button onClick={this.props.changeTitleFromChild}>Change App State</button>
        {/* USE TASKS NOT TODOS */} 
        {/* USE THIS.PROPS + {} */}
        {this.props.tasks.map((elem)=>{
          return <Item e={elem}/>
        })}
      </div>
    );
  }
}

// Q4: Item Component (there are 3 mistakes)
import React, { Component } from 'react';
// USE EXPORT DEFAULT
export default class Item extends Component {
  render() {
    return (
      <div>
        <h1>Item Component:</h1>
        {/* USE THIS.PROPS + {} */}
        {/* USE E NOT ELEM */}
        <p>{this.props.e}</p>
      </div>
    );
  }
}
