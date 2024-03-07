import express from 'express'
import { homePage, listTodo } from '../controller/controllers.js'

const Router = express.Router()

Router.get('/', homePage)
Router.get('/listtodo', listTodo)
Router.delete('/deletetodo', deleteTodo)

export default Router
