let list = [
  {
    id: 1,
    text: 'walk',
    done: false,
  },
  {
    id: 2,
    text: 'dance',
    done: true,
  },
  {
    id: 3,
    text: 'do things',
    done: false,
  },
]

export const getList = () => list

export const deleteTodoById = (id) => {
  console.log('this is id', id)
  list = list.filter((todo) => todo.id !== id)
  console.log('list after delete', list)
}

export const editTodoById = (id, text) => {
  console.log('text and id got : ', id, text)

  list = list.filter((todo) => (todo.id === id ? (todo.text = text) : text))

  console.log('list after edit', list)
}

export const addNewTodo = (id, text) => {
  const newTodo = {
    id,
    text,
    done: false,
  }

  list.unshift(newTodo)
  console.log('this is list after new todo added: ', list)
}
