import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();

    this.state = {
      todos: [{
        id: 1,
        name: "Write Code"
      },
      {
        id: 2,
        name: "Stand Up"
      },
      {
        id: 3,
        name: "Sleep"
      }]
    }
  }

  handleFormInput = () => {
    console.log("form got submitted");
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
