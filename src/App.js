import React from 'react'
import { TodoCounter } from './TodoCounter'
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar curso intro React', completed: false},
  { text: 'Llorar con la llorona', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      {/*<TodoSearch />*/}
        <input placeholder="Ingresa tu búsqueda"/>
      {/*<TodoList>
        {todos.map(todo => (
          <TodoItem />
          )
        )}
        </TodoList>*/}
      {/*<CreateTodoButton />*/}
        <button>
        +
        </button>
    </React.Fragment>

  );
}

export default App;
