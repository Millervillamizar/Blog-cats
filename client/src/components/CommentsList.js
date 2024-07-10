import React from "react";

const CommentsList = ({ comments, onDelete, onEdit }) => (
  <>
    <h3 className='sm:text-2xl text-xl font-bold my-6 text-gray-900'>
      Comentarios:
    </h3>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Autor</th>
            <th className="px-4 py-2 border-b">Comentario</th>
            <th className="px-4 py-2 border-b">Acciones</th> {/* Añadido */}
          </tr>
        </thead>
        <tbody>
          {comments.map((comment, index) => (
            <tr key={index} className="bg-gray-100 even:bg-gray-200">
              <td className="px-4 py-2 border-b">{comment.author}</td>
              <td className="px-4 py-2 border-b">{comment.content}</td>
              <td className="px-4 py-2 border-b">
                <button 
                  onClick={() => onEdit(comment)} 
                  className="text-blue-500 hover:text-blue-700 mr-4">
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(comment.id)} 
                  className="text-red-500 hover:text-red-700">
                  Eliminar
                </button>
              </td> {/* Añadido */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

export default CommentsList;




