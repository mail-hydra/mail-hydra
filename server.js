require('dotenv').config();
const express = require('express');
const app = express();
const kas = require('kas-api/dist/kas-mail-forward')

app.get('/', (req, res) => {
    result = new kas.KasMailForward(process.env.KAS_USERNAME, process.env.KAS_PASSWORD).list()
    result.then(function(results){
        results.forEach(element => {
            res.write('INCOME: ' + element.mail_forward_adress + ' ')
            res.write('\n')
            res.write('TARGET: ' + element.mail_forward_targets + ' ')
            res.write('\n')
            res.write('COMMENT: ' + element.mail_forward_comment + ' ')
            res.write('\n')
            // res.write(element.mail_forward_spamfilter + ' ')
            res.write(element.in_progress)
            res.write('\n')
            res.write('\n')
        });
        res.end()
    });
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
