const express = require('express');
const bodyParser = require('body-parser');
const commentRoutes = require('./src/routes/commentRoutes');
const knex = require('./src/db/knex');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://blog-cats.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(bodyParser.json());
app.use('/api/comments', commentRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
