const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors({origin: '*'}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
