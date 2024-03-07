import { getList, deleteTodoById, editTodoById } from '../db/db.js'

// our controllers/ get / remove / edit and more....
export const homePage = (req, res) => {
  res.send('Hello World from backend')
}

export const listTodo = (req, res) => {
  res.send(getList())
}

export const addTodo = (req, res) => {
  const { text } = req.body
  console.log('got the new text wanted to add', text)
}

export const deleteTodo = (req, res) => {
  const { id } = req.body
  deleteTodoById(id)
}

export const editTodo = (req, res) => {
  const { id, text } = req.body
  editTodoById(id, text)
}
