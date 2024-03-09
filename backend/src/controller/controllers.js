import uniqid from 'uniqid'

let list = [
  {
    id: 1,
    text: 'walk',
    checked: false,
    edited: false,
  },
  {
    id: 2,
    text: 'dance',
    checked: true,
    edited: false,
  },
  {
    id: 3,
    text: 'do things',
    checked: false,
    edited: false,
  },
]

// our controllers/ get / remove / edit and more....
export const homePage = (req, res) => {
  res.send('Hello World from backend')
}

export const listTodo = (req, res) => {
  res.send(list)
}

export const addTodo = (req, res) => {
  const { text } = req.body

  const newTodo = {
    id: uniqid(),
    text,
    checked: false,
  }

  list.unshift(newTodo)
  console.log('this is list after new todo added: ', list)
}

export const deleteTodo = (req, res) => {
  let { id } = req.params
  id = Number(id)
  list = list.filter((todo) => todo.id !== id)
  console.log('list after delete', list)
  res.status(200).json({ message: 'Todo deleted successfully' })
}

export const editTodo = (req, res) => {
  const { text } = req.body
  const { id } = req.params
  console.log('text and id got : ', id, text)

  list = list.map((todo) => (todo.id === Number(id) ? { ...todo, text } : todo))

  console.log('list after edit', list)

  res.status(200).json({ message: 'Todo edited successfully' })
}

export const changeCheckTodo = (req, res) => {
  const { id } = req.params

  console.log('this is id', Number(id))
  list = list.map((todo) =>
    todo.id === Number(id) ? { ...todo, checked: !todo.checked } : todo
  )
}

export const setTodoEdit = (req, res) => {
  const { id } = req.params

  console.log('this is id', Number(id))
  list = list.map((todo) =>
    todo.id === Number(id) ? { ...todo, edited: !todo.edited } : todo
  )
  console.log('this is list after changes: ', list)

  res.status(200).json({ message: 'Todo changed successfully' })
}
