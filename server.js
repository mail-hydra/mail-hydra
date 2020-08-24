require('dotenv').config();
const express = require('express');
const app = express();
const kas = require('kas-api/dist/kas-mail-forward')

function client(){
    return new kas.KasMailForward(process.env.KAS_USERNAME, process.env.KAS_PASSWORD)
}

app.get('/', (req, res) => {
    client().list().then(function(results){
        json = []
        results.forEach(element => {
            json.push({
                source: element.mail_forward_adress,
                target: element.mail_forward_targets,
                comment: element.mail_forward_comment,
                pending: element.in_progress,
            })
        });
        res.json(json)
    });
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
