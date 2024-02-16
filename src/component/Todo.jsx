import React, { useState, useEffect } from 'react'
import { todoList } from './hooks/TodoList.js'
export default function Todo() {
  const [todos, setTodos] = useState([])

  // use effect for the first render
  useEffect(() => {
    setTodos(todoList)
  }, [])

  const addTodo = () => {
    const newTodo = {
      tet: 'this is a new todo',
      completed: false,
    }
  }
  return (
    <>
      <div>
        <h1>todos</h1>
      </div>
      <div>
        <ul>
          {todos.map((item, index) => {
            return <li key={index}>{item.title}</li>
          })}
        </ul>
      </div>
      <div>
        <input type="text" />
        <button onClick={addTodo}>Add</button>
      </div>
    </>
  )
}
