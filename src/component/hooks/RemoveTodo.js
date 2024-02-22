const RemoveTodo = (title, todos, setTodos) => {
  const newTodos = todos.filter((todo) => todo.title !== title)
  setTodos(newTodos)
}
export default RemoveTodo
