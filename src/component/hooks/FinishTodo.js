const FinishTodo = (title, todos, setTodos) => {
  const foundTodoIndex = todos.findIndex((todo) => todo.title === title)
  if (foundTodoIndex !== -1) {
    todos[foundTodoIndex].completed = !todos[foundTodoIndex].completed
  }
  setTodos([...todos])
}
export default FinishTodo
