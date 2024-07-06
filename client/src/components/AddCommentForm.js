// src/components/AddCommentForm.js
import React, { useState } from "react";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComments = async () => {
    const result = await fetch(`/api/comments/${articleName}/add-comments`, {
      method: "post",
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!result.ok) {
      console.error(`Failed to add comment: ${result.statusText}`);
      return;
    }
    const body = await result.json();
    setArticleInfo((prevInfo) => ({ ...prevInfo, comments: body }));
    setUsername("");
    setCommentText("");
  };

  return (
    <form className='shadow rounded px-8 pt-6 pb-8 mb-4'>
      <h3 className='text-xl font-bold mb-4 text-gray-900'>Agrega un comentario</h3>
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        Nombre:
      </label>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        Comentario:
      </label>
      <textarea
        rows='4'
        cols='50'
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      <button
        type='button'
        onClick={addComments}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Enviar
      </button>
    </form>
  );
};

export default AddCommentForm;
