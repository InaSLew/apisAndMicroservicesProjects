const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

 
app.get("/api/timestamp/:date_string?", function (req, res) {
  const digitStr = /\d\d\d\d\d\d\d\d\d\d/;
  const data = digitStr.test(req.params.date_string) ? parseInt(req.params.date_string) : req.params.date_string;
  const targetDate = new Date(data);
  res.json({ "unix": targetDate.getTime(), "utc": targetDate.toUTCString() });
});


const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});