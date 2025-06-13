const express = require('express');
const bodyParser = require('body-parser');
const excelHandler = require('./excelHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
  const playerData = req.body;
  excelHandler.writeDataToExcel(playerData);
  res.redirect('/');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});