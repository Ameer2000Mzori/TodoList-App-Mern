import { getList, deleteTodoById } from '../db/db.js'

// our controllers/ get / remove / edit and more....
export const homePage = (req, res) => {
  res.send('Hello World from backend')
}

export const listTodo = (req, res) => {
  res.send(getList())
}

export const deleteTodo = (req, res) => {
  const { id } = req.body
  deleteTodoById(id)
}
