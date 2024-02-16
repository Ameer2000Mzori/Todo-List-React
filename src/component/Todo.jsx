import React from 'react'

export default function Todo() {
  return (
    <>
      <div>
        <h1>todos</h1>
      </div>
      <div>
        <ul>
          <li>
            <p>I WILL DANCE</p>
          </li>
          <li>
            <p>I WILL fly</p>
          </li>
          <li>
            <p>I WILL fight</p>
          </li>
        </ul>
      </div>
      <div>
        <input type="text" />
        <button>Add</button>
      </div>
    </>
  )
}
