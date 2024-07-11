import React, { useContext } from "react";
import AuthContext from "../AuthContext";

const CommentsList = ({ comments, onDelete, onEdit }) => {
  const { user } = useContext(AuthContext);

  return (
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
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment, index) => (
              <tr key={index} className="bg-gray-100 even:bg-gray-200">
                <td className="px-4 py-2 border-b">{comment.author}</td>
                <td className="px-4 py-2 border-b">{comment.content}</td>
                <td className="px-4 py-2 border-b">
                  {user && user.id === comment.user_id && (
                    <>
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
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CommentsList;
