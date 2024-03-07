import uniqid from 'uniqid'
import {
  getList,
  deleteTodoById,
  editTodoById,
  addNewTodo,
  checkTodo,
} from '../db/db.js'

// our controllers/ get / remove / edit and more....
export const homePage = (req, res) => {
  res.send('Hello World from backend')
}

export const listTodo = (req, res) => {
  res.send(getList())
}

export const addTodo = (req, res) => {
  const { text } = req.body
  const id = uniqid()
  console.log('new text and id : ', text, id)
  addNewTodo(id, text)
}

export const deleteTodo = (req, res) => {
  const { id } = req.params
  console.log('this is id params', id)
  deleteTodoById(id)
}

export const editTodo = (req, res) => {
  const { id, text } = req.body
  editTodoById(id, text)
}

export const changeCheckTodo = (req, res) => {
  const { id } = req.body
  checkTodo(id)
}
