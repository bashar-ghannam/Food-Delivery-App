import express from 'express';
import cros from 'cors';

// app config
const app = express();
const port = 4000;

//middleware
app.use(express.json(0));
app.use(cros());

app.get('/', (req, res) => {
  res.send('API Working');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
