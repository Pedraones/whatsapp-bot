const express = require('express');
const app = express();

app.use(express.json());

app.get('/');

app.post('/webhook', (req, res) => {
  console.log(res.body.message);
});

app.listen(3000, () => {
  console.log('Server started');
});