import express from 'express'
import {
  homePage,
  listTodo,
  deleteTodo,
  editTodo,
  addTodo,
  changeCheckTodo,
  setTodoEdit,
} from '../controller/controllers.js'

const Router = express.Router()

Router.get('/', homePage)
Router.get('/listtodo', listTodo)
Router.post('/addtodo', addTodo)
Router.delete('/deletetodo/:id', deleteTodo)
Router.patch('/edittodo/:id', editTodo)
Router.patch('/checktodo/:id', changeCheckTodo)
Router.patch('/setTodoEdit/:id', setTodoEdit)

export default Router
