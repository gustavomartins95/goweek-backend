const port = process.env.PORT || 3000
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb://goweek:goweek2018@ds137149.mlab.com:37149/goweek-backend', {
  useNewUrlParser: true
})

app.use((req, res, next) => {
  req.io = io
  return next()
})

app.use(cors())
app.use(express.json())
app.use(require('./routes'))

server.listen(port, (err) => {
  if (err) console.log('error', err)
  else console.log(`Server started on port ${port}`)
})
