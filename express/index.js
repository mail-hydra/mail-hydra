const express = require('express')
const bodyParser = require('body-parser')

const routes = {
  forwards: require(__dirname + '/routes/forwards')
}

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

for (const [routeName, routeController] of Object.entries(routes)) {
  if (routeController.getAll) {
    app.get(`/api/${routeName}`, routeController.getAll)
  }
}

module.exports = app