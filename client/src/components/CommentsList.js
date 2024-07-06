// src/components/CommentsList.js
import React from "react";

const CommentsList = ({ comments }) => (
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
          </tr>
        </thead>
        <tbody>
          {comments.map((comment, index) => (
            <tr key={index} className="bg-gray-100 even:bg-gray-200">
              <td className="px-4 py-2 border-b">{comment.author}</td>
              <td className="px-4 py-2 border-b">{comment.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

export default CommentsList;


