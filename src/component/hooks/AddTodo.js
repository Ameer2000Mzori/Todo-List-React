const AddTodo = (newTodos, setTodos, setNewTodos) => {
  if (newTodos !== undefined && newTodos !== null && newTodos !== '') {
    const newTodo = {
      title: newTodos,
      completed: false,
    }

    setTodos((prev) => [...prev, newTodo])
    setNewTodos(() => '')
  }
}

export default AddTodo
