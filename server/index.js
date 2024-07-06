// index.js
const express = require('express');
const bodyParser = require('body-parser');
const commentRoutes = require('./src/routes/commentRoutes');
const knex = require('./src/db/knex');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/comments', commentRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
