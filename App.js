// Q2: App Component (there are 7 mistakes)

// WRITE || EDIT THE CODE UNDER THIS LINE
import Tasks from './components/Tasks';

export default class App extends Component {
  state = {
    title: 'ELIZABETH GREENE',
    todos: ['eat', 'eat eat', 'eat again']
  };
  changeTitle() {
    // WRITE || EDIT THE CODE UNDER THIS LINE
    this.setState().title = 'AGGREGOR ZOLDYCK';
  }
  render() {
    
    return (
      {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
      {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
      <h1>App Component: {this.state.title}</h1>
      {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
      <button onClick={this.state.changeTitle()}>Change Title</button>
      {/* WRITE || EDIT THE CODE UNDER THIS LINE*2 */}
      <Tasks tasks={this.props.todos} changeTitleFromChild={this.props.changeTitle()} />
    )
  }
}
