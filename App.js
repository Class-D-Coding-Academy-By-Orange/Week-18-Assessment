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
    state.title = 'AGGREGOR ZOLDYCK'
  }
  render() {
    return (
      {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
      {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
      <h1>App Component: state.title</h1>
      {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
      <button onClick={changeTitle}>Change Title</button>
      {/* WRITE || EDIT THE CODE UNDER THIS LINE*2 */}
      <Tasks tasks={todos} changeTitleFromChild={changeTitle} />
    )
  }
}
