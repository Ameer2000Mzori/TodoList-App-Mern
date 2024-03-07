import express from 'express'
import {
  homePage,
  listTodo,
  deleteTodo,
  editTodo,
  addTodo,
  changeCheckTodo,
} from '../controller/controllers.js'

const Router = express.Router()

Router.get('/', homePage)
Router.get('/listtodo', listTodo)
Router.post('/addtodo', addTodo)
Router.delete('/deletetodo', deleteTodo)
Router.patch('/edittodo', editTodo)
Router.patch('/checktodo', changeCheckTodo)

export default Router
