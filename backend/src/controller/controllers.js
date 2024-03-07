import { list } from '../db/dbList.js'

export const homePage = (req, res) => {
  res.send('Hello World from backend')
}

export const listTodo = (req, res) => {
  res.send(list)
}
