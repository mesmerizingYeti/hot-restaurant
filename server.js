const path = require('path')
const express = require('express')

const app = express()

app.listen(3000)

app.use(express.static(path.join(__dirname, 'app', 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


require('./app/routes/apiRoutes')(app)
require('./app/routes/routes')(app)
