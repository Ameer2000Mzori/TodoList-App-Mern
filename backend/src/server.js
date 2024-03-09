import express from 'express'
import Router from './route/routes.js'
import morgan from 'morgan'
import 'dotenv/config'

const PORT = process.env.PORT || 4000

const app = express()
app.use(morgan('dev'))
app.use(express.json()) // <= never forget this when trying to get data from reg.body or more
app.use(Router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
