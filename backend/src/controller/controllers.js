import { list } from '../db/dbList.js'

export const homePage = (req, res) => {
  res.send('Hello World from backend')
}

export const listTodo = (req, res) => {
  res.send(list)
}

export const deleteTodo = (req, res) => {
  const { text } = req.body
  console.log(text)
  res.send('this is what you typed', text)
}
