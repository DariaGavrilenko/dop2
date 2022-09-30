import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [todos, setTodos] = useState<Array<PropsType>>([])
  console.log(todos)

  useEffect(() => {fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => setTodos(json))}, [])

  const onClickHandler = () => {
    setTodos([])
  }

  type PropsType = {
    userId: number
    id: number
    title: string
    completed: boolean
  }
  return (
    <div className="App">
      <button onClick={onClickHandler}>Clean Post</button>
      <ul>
        {todos.map(el => {
<div></div>
          return (
            <li><span>{el.id}</span>
              <span>{el.title}</span>
              <span>{el.completed}</span></li>
          )
        })}
      </ul>
      
    </div>
  );
}

export default App;
