import React from 'react'
import { todoList } from './hooks/TodoList.js'
export default function Todo() {
  return (
    <>
      <div>
        <h1>todos</h1>
      </div>
      <div>
        <ul>
          {todoList.map((item, index) => {
            return <li key={index}>{item.title}</li>
          })}
        </ul>
      </div>
      <div>
        <input type="text" />
        <button>Add</button>
      </div>
    </>
  )
}
