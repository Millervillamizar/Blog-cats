const express = require('express');
const bodyParser = require('body-parser');
const commentRoutes = require('./src/routes/commentRoutes');
const knex = require('./src/db/knex');
const cors = require('cors'); // Asegúrate de requerir el paquete cors

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://blog-cats-production.up.railway.app:5000' // Reemplaza 'http://tu-dominio.com' con el dominio de tu frontend
})); // Añade el middleware cors aquí

app.use(bodyParser.json());
app.use('/api/comments', commentRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
