const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


  app.get('/api/collections', (req, res) => {
    res.json(  { id: 2, name: 'City' });
  });

  app.listen(3000, () => console.log('API on http://localhost:3000'));