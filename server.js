require('dotenv').config()
const express = require('express')
const app = express()
const kas = require('kas-api/dist/kas-mail-forward')
// Listen to the App Engine-specified port, or 8080 otherwise
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  client().list().then(function (results) {
    var json = []
    results.forEach(element => {
      json.push({
        source: element.mail_forward_adress,
        target: element.mail_forward_targets,
        comment: element.mail_forward_comment,
        pending: element.in_progress
      })
    })
    res.json(json)
  })
})
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})

function client () {
  return new kas.KasMailForward(process.env.KAS_USERNAME, process.env.KAS_PASSWORD)
}
