import React from 'react';
import './App.css';
import TodoItem from './component/TodoItem';
import todosData from './component/todosData';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      todos:todosData
    }
  }
  render(){const todosItems=this.state.todos.map(todo=> <TodoItem key={todo.id}
     todo={todo}/>  
  )
  return (
    <div >
      {todosItems}
    </div>
  );}
}

export default App;
