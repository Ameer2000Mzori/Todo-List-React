import React, { useState, useEffect } from 'react'
import { todoList } from './hooks/TodoList.js'
export default function Todo() {
  const [todos, setTodos] = useState([])
  const [newTodos, setNewTodos] = useState('')

  // use effect for the first render

  useEffect(() => {
    setTodos(todoList)
  }, [])

  const addTodo = () => {
    if (newTodos !== undefined && newTodos !== null && newTodos !== '') {
      const newTodo = {
        title: newTodos,
        completed: false,
      }

      setTodos((todos) => [...todos, newTodo])
      console.log(todos)
    }
  }

  // here each todo is clicked
  const finishedTodo = (e) => {
    const foundTodoIndex = todos.findIndex((todo) => todo.title === e)
    if (foundTodoIndex !== -1) {
      todos[foundTodoIndex].completed = !todos[foundTodoIndex].completed
    }
    setTodos([...todos])
    console.log(todos)
  }

  // here is remove todo function
  const removeTodo = (e) => {
    const newTodos = todos.filter((todo) => todo.title !== e)
    setTodos(newTodos)
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
              <li key={index}>
                <p className={item.completed ? ' line-through' : ''}>
                  {item.title}
                </p>
                <button onClick={() => finishedTodo(item.title)}>
                  {item.completed ? ' undo' : 'done'}
                </button>
                <button onClick={() => removeTodo(item.title)}>remove</button>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <input
          type="text"
          value={newTodos}
          onChange={(e) => {
            setNewTodos(e.target.value)
          }}
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </>
  )
}
