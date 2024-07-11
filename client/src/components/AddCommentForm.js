import React, { useState, useContext } from "react";
import AuthContext from "../AuthContext";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [commentText, setCommentText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [error, setError] = useState('');
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('Debes iniciar sesión para comentar');
      return;
    }

    if (!commentText || commentText.length < 10 || commentText.length > 500) {
      setError('El comentario debe tener entre 10 y 500 caracteres');
      return;
    }

    try {
      const result = await fetch(`https://blog-cats-production.up.railway.app/api/comments/${articleName}/add-comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: user.email, text: commentText, userId: user.id }),
      });

      if (!result.ok) {
        throw new Error(`Error al agregar el comentario: ${result.statusText}`);
      }

      const body = await result.json();
      setArticleInfo((prevInfo) => ({ ...prevInfo, comments: body }));
      setCommentText("");
      setCharCount(0);
      setError('');
    } catch (error) {
      setError('Error al agregar el comentario');
      console.error("Error al agregar el comentario:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="shadow rounded px-8 pt-6 pb-8 mb-4">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Agrega un comentario</h3>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <textarea
        rows="4"
        cols="50"
        value={commentText}
        onChange={(e) => {
          setCommentText(e.target.value);
          setCharCount(e.target.value.length);
        }}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <div className="text-right text-gray-600 text-xs">
        {charCount}/500 caracteres
      </div>
      <button
        type="submit"
        disabled={!commentText || charCount > 500}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
      >
        Enviar
      </button>
    </form>
  );
};

export default AddCommentForm;

