import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";

// Pages
import NotFound from "./NotFound";

// Components
import Articles from "../components/Articles";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ comments: [] });
  const [editComment, setEditComment] = useState(null);
  const [editText, setEditText] = useState('');
  const [editCharCount, setEditCharCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`/api/comments/${name}`);
        const text = await result.text();
        if (!result.ok) {
          throw new Error(`API request failed: ${result.status} ${result.statusText}`);
        }
        const body = JSON.parse(text);
        setArticleInfo((prevInfo) => ({ ...prevInfo, comments: body }));
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchData();
  }, [name]);

  const handleDelete = async (commentId) => {
    try {
      const result = await fetch(`/api/comments/${commentId}/delete`, {
        method: 'DELETE',
      });
      if (!result.ok) {
        throw new Error(`Failed to delete comment: ${result.statusText}`);
      }
      setArticleInfo((prevInfo) => ({
        ...prevInfo,
        comments: prevInfo.comments.filter((comment) => comment.id !== parseInt(commentId, 10)),
      }));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleEdit = (comment) => {
    setEditComment(comment);
    setEditText(comment.content);
    setEditCharCount(comment.content.length);
  };

  const handleUpdateComment = async () => {
    if (editText.trim() === '') {
      alert('El comentario no puede estar vacío.');
      return;
    }

    try {
      const result = await fetch(`/api/comments/${editComment.id}/edit`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: editText }),
      });
      if (!result.ok) {
        throw new Error(`Failed to update comment: ${result.statusText}`);
      }
      const updatedComments = await result.json();
      if (updatedComments.length === 0) {
        throw new Error('Comment not found');
      }
      const updatedComment = updatedComments[0]; // Obtén el primer (y único) comentario del array
      setArticleInfo((prevInfo) => ({
        ...prevInfo,
        comments: prevInfo.comments.map((comment) =>
          comment.id === updatedComment.id ? updatedComment : comment
        ),
      }));
      setEditComment(null);
      setEditText('');
      setEditCharCount(0);
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  const formatComment = (comment) => {
    return comment.replace(/(.{60})/g, '$1\n');
  };

  if (!article) return <NotFound />;
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <div className="container mx-auto px-4 mb-40">
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className='leading-relaxed text-base mb-4 text-justify' key={index}>
          {paragraph}
        </p>
      ))}
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <CommentsList 
        comments={articleInfo.comments.map(comment => ({
          ...comment,
          content: formatComment(comment.content)
        }))} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
      />
      {editComment && (
        <div className="mb-4">
          <textarea
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
              setEditCharCount(e.target.value.length);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div className='text-right text-gray-600 text-xs'>
            {editCharCount}/500 caracteres
          </div>
          <button
            onClick={handleUpdateComment}
            disabled={editCharCount > 500}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          >
            Actualizar Comentario
          </button>
        </div>
      )}
      <h1 className='sm:text-2xl text-xl font-bold my-4 text-gray-900'>
        Otros Artículos
      </h1>
      <div className='flex flex-wrap -m-4'>
        <Articles articles={otherArticles} />
      </div>
    </div>
  );
};

export default Article;
