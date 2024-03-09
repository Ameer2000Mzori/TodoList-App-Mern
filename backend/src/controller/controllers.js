import uniqid from 'uniqid'

let list = []

// our controllers/ get / remove / edit and more....
export const homePage = (req, res) => {
  res.send('Hello World from backend')
}

export const listTodo = (req, res) => {
  res.send(list)
}

export const addTodo = (req, res) => {
  const { text } = req.body
  console.log('text got : ', text)

  const newTodo = {
    id: uniqid(),
    text,
    checked: false,
  }

  list.unshift(newTodo)
  console.log('this is list after new todo added: ', list)
  res.status(200).json({ message: 'Todo deleted successfully' })
}

export const deleteTodo = (req, res) => {
  let { id } = req.params

  list = list.filter((todo) => todo.id !== id)
  res.status(200).json({ message: 'Todo deleted successfully' })
  console.log('list after delete', list)
}

export const editTodo = (req, res) => {
  const { text } = req.body
  const { id } = req.params
  console.log('text and id got : ', id, text)

  list = list.map((todo) => (todo.id === id ? { ...todo, text } : todo))

  console.log('list after edit', list)

  res.status(200).json({ message: 'Todo edited successfully' })
}

export const changeCheckTodo = (req, res) => {
  const { id } = req.params

  list = list.map((todo) =>
    todo.id === id ? { ...todo, checked: !todo.checked } : todo
  )
  console.log('this is list after changes: ', list)

  res.status(200).json({ message: 'Todo changed successfully' })
}

export const setTodoEdit = (req, res) => {
  const { id } = req.params

  list = list.map((todo) =>
    todo.id === id ? { ...todo, edited: !todo.edited } : todo
  )
  console.log('this is list after changes: ', list)

  res.status(200).json({ message: 'Todo edit changed successfully' })
}
