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
                <button onClick={() => finishedTodo(item.title)}>done</button>
                <button onClick={() => removeTodo(item.title)}>remove</button>
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
