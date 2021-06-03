import './App.css';
import { useState, useEffect } from "react";
/* Importing */
import Form from './components/form';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() =>{
    /* Getting from localStorage */
  const getFromLocalStorage = () => {
    if(localStorage.getItem('todos')=== null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }

  }
    getFromLocalStorage();
  }, []);

  useEffect(() =>{
    /* Saving to localStorage */
    const saveToLocalStorage = () => {
      if(localStorage.getItem('todos')=== null){
        localStorage.setItem('todos', JSON.stringify([]));
      }
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    saveToLocalStorage();
  }, [todos]);

  useEffect( ()=>{
    const filteringTodos = () => {
      switch (filter) {
        case 'completed':
          setFilteredTodos(
            todos.filter( (todo) => {
              return todo.status === true
            })
          )
          break;
        case 'uncompleted':
          setFilteredTodos(
            todos.filter( (todo) => {
              return todo.status === false
            })
          )
          break
        default:
          setFilteredTodos([...todos]);
          break;
      }
    }

    filteringTodos();
  }, [todos ,filter] );

  return (
    <div className="App">
      <header>
        <h1>
          React Todo App of mine
        </h1>
        <p>Current todo: {todo}</p>
      </header>
      <Form setFilter={setFilter} todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
