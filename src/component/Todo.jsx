import React, { useState, useEffect } from 'react'
import { todoList } from './hooks/TodoList.js'
export default function Todo() {
  const [todos, setTodos] = useState([])
  const [newTodos, setNewTodos] = useState('')
  const [editTodos, setEditTodos] = useState(false)
  const [newEditTodos, setNewEditTodos] = useState('')

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

  // this is for editing todo when clicker is clicked
  const editTodo = (title) => {
    setEditTodos(title) // Set the title of the todo being edited
    const foundTodo = todos.find((todo) => todo.title === title)
    if (foundTodo) {
      setNewEditTodos(foundTodo.title) // Optionally initialize the input with the current title
    }
  }

  const doneEdit = (e) => {
    const foundTodoIndex = todos.findIndex((todo) => todo.title === e)
    if (foundTodoIndex !== -1) {
      todos[foundTodoIndex].title = newEditTodos
    }
    setTodos([...todos])
    console.log(todos)
    setEditTodos(false)
  }

  return (
    <div className="h-[100dvh] w-[100dvw] flex flex-col text-center items-center justify-center">
      <div className="w-[500px] h-[700px] flex flex-col text-center items-center">
        <div className="h-[50px] w-[100%] bg-black text-white flex flex-col text-center ietms-center justify-center">
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
                  <button onClick={() => editTodo(item.title)}>edit</button>
                  {editTodos === item.title && ( // Compare to the current item's title
                    <>
                      <input
                        type="text"
                        value={newEditTodos}
                        onChange={(e) => {
                          setNewEditTodos(e.target.value)
                        }}
                      />
                      <button onClick={(e) => doneEdit(item.title)}>
                        Done Edit
                      </button>
                    </>
                  )}
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
      </div>
    </div>
  )
}
