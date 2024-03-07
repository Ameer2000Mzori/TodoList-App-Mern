let list = [
  {
    id: 1,
    text: 'walk',
    checked: false,
  },
  {
    id: 2,
    text: 'dance',
    checked: true,
  },
  {
    id: 3,
    text: 'do things',
    checked: false,
  },
]

// get todo list
export const getList = () => list

// delete todo
export const deleteTodoById = (id) => {
  id = Number(id)
  list = list.filter((todo) => todo.id !== id)
  console.log('list after delete', list)
}

// edit todo
export const editTodoById = (id, text) => {
  console.log('text and id got : ', id, text)

  list = list.filter((todo) => (todo.id === id ? (todo.text = text) : text))

  console.log('list after edit', list)
}

// add new function
export const addNewTodo = (id, text) => {
  const newTodo = {
    id,
    text,
    checked: false,
  }

  list.unshift(newTodo)
  console.log('this is list after new todo added: ', list)
}

// check or un check a todo
export const checkTodo = (id) => {
  console.log('this is id', id)
  list = list.map((todo) =>
    todo.id === id ? { ...todo, checked: !todo.checked } : todo
  )

  console.log('this is list after changes: ', list)
}
