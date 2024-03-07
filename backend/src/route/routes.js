import express from 'express'
import { homePage, listTodo } from '../controller/controllers.js'

const Router = express.Router()

Router.get('/', homePage)
Router.get('/listTodo', listTodo)

export default Router
