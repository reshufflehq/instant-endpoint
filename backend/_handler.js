import express from 'express';

const app = express();

app.use(express.static('public'));

app.post('/api', (req, res) => {
  return res.status(200).send('Ok');
});

export default app;
