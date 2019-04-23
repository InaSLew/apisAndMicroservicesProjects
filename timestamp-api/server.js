const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

 
app.get("/api/timestamp/:date_string?", function (req, res) {
    if (parseInt(req.params.date_string)) req.params.date_string = parseInt(req.params.date_string);
    let dateStr = new Date(req.params.date_string);
    if (dateStr) res.json({ "unix": dateStr.getTime(), "utc" : dateStr.toUTCString() });
});


const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});