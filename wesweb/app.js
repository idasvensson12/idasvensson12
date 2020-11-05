const express = require('express')
const databaseModule = require('./databaseModule')
const app = express()
const port = 3000
const clientDir = __dirname + "\\client\\"
app.use(express.json())
app.use(express.urlencoded())
app.get('/', (req, res) => {
  res.sendFile(clientDir + "index.html")
})
app.get('/', (req, res) => {
  res.sendFile(clientDir + "style.css")
})
app.get('/', (req, res) => {
  res.sendFile(clientDir + "dog.jpg")
})
app.post('/', (req, res) => {
  console.log(req.body.name)
  console.log(req.body.email)
  databaseModule.storePerson(req.body.name, req.body.email, req.body.age)
  res.redirect('/')
})
app.listen(port, () => {
  console.log('Example app listening on port ${port}!')
})