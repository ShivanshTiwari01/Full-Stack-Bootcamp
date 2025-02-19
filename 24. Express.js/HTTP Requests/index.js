import express from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  console.log(req.rawHeaders);
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
