// server/src/controllers/articleController.js
const { Pool } = require('pg');

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'comments',
  password: 'admin',
  port: 5432,
});

// Controlador para agregar un comentario a un artículo
exports.addComment = async (req, res) => {
  const { articleName } = req.params; // No necesitas obtener el nombre del artículo aquí
  const { username, text } = req.body;

  try {
    // Ejecuta una consulta SQL para insertar el comentario en la base de datos
    const query = 'INSERT INTO comments (article_id, username, text) VALUES ($1, $2, $3)';
    await pool.query(query, [articleName, username, text]); // Cambia articleName por el artículo correcto

    // Envía una respuesta exitosa
    res.status(201).json({ success: true, message: 'Comentario agregado correctamente' });
  } catch (error) {
    console.error('Error al agregar el comentario:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
};

