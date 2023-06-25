const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('TJENANNAER');
});

app.listen(8000, () => {
  console.log('LISTENING ON 8000');
});
