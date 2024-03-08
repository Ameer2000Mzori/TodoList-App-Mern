import uniqid from 'uniqid'

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
  const { id } = req.params
  id = Number(id)
  list = list.filter((todo) => todo.id !== id)
  console.log('list after delete', list)
}

export const editTodo = (req, res) => {
  const { id, text } = req.body
  console.log('text and id got : ', id, text)

  list = list.filter((todo) => (todo.id === id ? (todo.text = text) : text))

  console.log('list after edit', list)
}

export const changeCheckTodo = (req, res) => {
  const { id } = req.body
  console.log('this is id', id)
  list = list.map((todo) =>
    todo.id === id ? { ...todo, checked: !todo.checked } : todo
  )

  console.log('this is list after changes: ', list)
}
