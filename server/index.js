const express = require('express');
const bodyParser = require('body-parser');
const commentRoutes = require('./src/routes/commentRoutes');
const authRoutes = require('./src/routes/authRoutes'); // Importa las rutas de autenticación
const knex = require('./src/db/knex');
const cors = require('cors'); // Importa el paquete cors

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Usa el middleware cors
app.use(bodyParser.json());
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes); // Usa las rutas de autenticación

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

