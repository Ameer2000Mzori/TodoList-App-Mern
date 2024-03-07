import express from 'express'
import Router from './route/routes.js'

const app = express()
app.use(express.json()) // <= never forget this when trying to get data from reg.body or more
app.use(Router)

app.listen(4000, () => {
  console.log('Server is running on port 3000')
})
