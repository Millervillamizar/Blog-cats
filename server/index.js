const express = require('express');
const bodyParser = require('body-parser');
const commentRoutes = require('./src/routes/commentRoutes');
const authRoutes = require('./src/routes/authRoutes');
const cors = require('cors');
const knex = require('./src/db/knex');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://blog-cats.vercel.app'
}));
app.use(bodyParser.json());
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


