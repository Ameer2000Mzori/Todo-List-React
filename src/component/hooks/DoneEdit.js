const DoneEdit = (title, todos, newEditTodos, setTodos, setEditTodos) => {
  const foundTodoIndex = todos.findIndex((todo) => todo.title === title)
  if (foundTodoIndex !== -1) {
    todos[foundTodoIndex].title = newEditTodos
  }
  setTodos([...todos])
  setEditTodos(false)
}

export default DoneEdit
