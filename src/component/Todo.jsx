import React, { useState, useEffect } from 'react'
import { todoList } from './hooks/TodoList.js'
import AddTodo from './hooks/AddTodo.js'
export default function Todo() {
  const [todos, setTodos] = useState([])
  const [newTodos, setNewTodos] = useState('')
  const [editTodos, setEditTodos] = useState(false)
  const [newEditTodos, setNewEditTodos] = useState('')

  // use effect for the first render

  useEffect(() => {
    setTodos(todoList)
  }, [])

  // here each todo is clicked
  const finishedTodo = (e) => {
    const foundTodoIndex = todos.findIndex((todo) => todo.title === e)
    if (foundTodoIndex !== -1) {
      todos[foundTodoIndex].completed = !todos[foundTodoIndex].completed
    }
    setTodos([...todos])
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
    setEditTodos(false)
  }

  return (
    <div className="h-[100dvh] w-[100dvw] flex flex-col text-center items-center justify-center bg-[#BFEA7C]">
      <div className="w-[100%] h-[70%] sm:w-[500px] sm:h-[700px]   flex flex-col text-center items-center">
        <div className="h-[10%] w-[100%] bg-[#416D19] text-white flex flex-col text-center items-center justify-center">
          <h1>todos</h1>
        </div>
        <div className="bg-[#9BCF53] h-[80%] w-[100%]">
          <ul className="h-[100%] w-[100%] flex flex-col overflow-auto items-center gap-4 pt-4">
            {todos.map((item, index) => {
              return (
                <li
                  className="w-[98%] h-[50px] flex flex-row text-center  justify-between items-center p-4 bg-[#BFEA7C]"
                  key={index}
                >
                  {editTodos === item.title ? ( // Compare to the current item's title
                    <>
                      <input
                        type="text"
                        value={newEditTodos}
                        onChange={(e) => {
                          setNewEditTodos(e.target.value)
                        }}
                      />
                      <button onClick={(e) => doneEdit(item.title)}>
                        Done
                      </button>
                    </>
                  ) : (
                    <>
                      <p className={item.completed ? ' line-through' : ''}>
                        {item.title}
                      </p>
                      <div className="gap-4 h-[100%] w-[150px] flex flex-row text-center items-center justify-between">
                        <button onClick={() => finishedTodo(item.title)}>
                          {item.completed ? ' undo' : 'done'}
                        </button>
                        <button onClick={() => removeTodo(item.title)}>
                          remove
                        </button>
                        <button onClick={() => editTodo(item.title)}>
                          edit
                        </button>
                      </div>
                    </>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="h-[10%]  w-[100%] bg-[#416D19] flex flex-row gap-4 text-center items-center justify-center ">
          <input
            type="text"
            value={newTodos}
            onChange={(e) => {
              setNewTodos(e.target.value)
            }}
          />
          <button
            onClick={() => AddTodo(todos, setTodos)}
            className="text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
