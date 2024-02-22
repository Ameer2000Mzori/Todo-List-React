const EditTodo = (title, todos, setEditTodos, setNewEditTodos) => {
  setEditTodos(title)
  const foundTodo = todos.find((todo) => todo.title === title)
  if (foundTodo) {
    setNewEditTodos(foundTodo.title)
  }
}

export default EditTodo
