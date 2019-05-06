const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
    res.json({
        ipaddress: req.ip,
        language: req.get('accept-language'),
        software: req.get('user-agent')
    });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
    console.log(`App is listening on port ${listener.address().port}`);
});