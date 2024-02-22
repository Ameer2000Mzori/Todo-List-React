import React, { useState, useEffect } from 'react'
import { todoList } from './hooks/TodoList.js'
import AddTodo from './hooks/AddTodo.js'
import FinishTodo from './hooks/FinishTodo.js'
import RemoveTodo from './hooks/RemoveTodo.js'
import EditTodo from './hooks/EditTodo.js'
import DoneEdit from './hooks/DoneEdit.js'
export default function Todo() {
  const [todos, setTodos] = useState([])
  const [newTodos, setNewTodos] = useState('')
  const [editTodos, setEditTodos] = useState(false)
  const [newEditTodos, setNewEditTodos] = useState('')

  // use effect for the first render

  useEffect(() => {
    setTodos(todoList)
  }, [])

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
                      <button
                        onClick={(e) =>
                          DoneEdit(
                            item.title,
                            todos,
                            newEditTodos,
                            setTodos,
                            setEditTodos
                          )
                        }
                      >
                        Done
                      </button>
                    </>
                  ) : (
                    <>
                      <p className={item.completed ? ' line-through' : ''}>
                        {item.title}
                      </p>
                      <div className="gap-4 h-[100%] w-[150px] flex flex-row text-center items-center justify-between">
                        <button
                          onClick={() =>
                            FinishTodo(item.title, todos, setTodos)
                          }
                        >
                          {item.completed ? ' undo' : 'done'}
                        </button>
                        <button
                          onClick={() =>
                            RemoveTodo(item.title, todos, setTodos)
                          }
                        >
                          remove
                        </button>
                        <button
                          onClick={() =>
                            EditTodo(
                              item.title,
                              todos,
                              setEditTodos,
                              setNewEditTodos
                            )
                          }
                        >
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
            onClick={() => {
              AddTodo(newTodos, setTodos, setNewTodos)
            }}
            className="text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
