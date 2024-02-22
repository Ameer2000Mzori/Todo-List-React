const AddTodo = (newTodos, setTodos) => {
  if (newTodos !== undefined && newTodos !== null && newTodos !== '') {
    const newTodo = {
      title: newTodos,
      completed: false,
    }
    // setNewTodos('')
    setTodos((prev) => [...prev, newTodo])
  }
}

export default AddTodo
