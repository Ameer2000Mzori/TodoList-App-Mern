import express from 'express'
import {
  homePage,
  listTodo,
  deleteTodo,
  editTodo,
} from '../controller/controllers.js'

const Router = express.Router()

Router.get('/', homePage)
Router.get('/listtodo', listTodo)
Router.delete('/deletetodo', deleteTodo)
Router.patch('/edittodo', editTodo)

export default Router
