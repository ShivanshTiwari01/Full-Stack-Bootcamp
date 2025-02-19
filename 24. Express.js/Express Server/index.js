import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.sendStatus(201);
});

app.put('/', (req, res) => {
  res.sendStatus(200);
});

app.post('/', (req, res) => {
  res.sendStatus(200);
});

app.delete('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
