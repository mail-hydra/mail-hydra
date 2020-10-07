require('dotenv').config()
const express = require('express')
const app = express()
const kas = require('kas-api/dist/kas-mail-forward')
// Listen to the App Engine-specified port, or 8080 otherwise
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  client().list().then(function (results) {
    res.json(forwardListToJSON(results))
  })
})

// start app
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})

function forwardListToJSON (forwardList) {
  var json = []
  forwardList.forEach(element => {
    json.push({
      source: element.mail_forward_adress,
      target: element.mail_forward_targets,
      comment: element.mail_forward_comment,
      pending: element.in_progress
    })
  })
  return json
}

function client () {
  return new kas.KasMailForward(process.env.KAS_USERNAME, process.env.KAS_PASSWORD)
}
