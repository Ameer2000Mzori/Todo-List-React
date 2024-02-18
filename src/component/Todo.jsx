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
      title: 'this is a new todo',
      completed: false,
    }

    setTodos((todos) => [...todos, newTodo])
  }

  // here each todo is clicked will become true or false
  const finishedTodo = (e) => {
    const foundTodo = todos.findIndex((todo) => todo.title === e.textContent)
    todos[foundTodo].completed = true
  }

  return (
    <>
      <div>
        <h1>todos</h1>
      </div>
      <div>
        <ul>
          {todos.map((item, index) => {
            return (
              <li onClick={(e) => finishedTodo(e.target)} key={index}>
                {item.title}
              </li>
            )
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
