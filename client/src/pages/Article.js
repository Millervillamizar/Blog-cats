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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`https://blog-cats-production.up.railway.app/api/comments/${name}`);
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
      const result = await fetch(`https://blog-cats-production.up.railway.app/api/comments/${commentId}/delete`, {
        method: 'DELETE',
      });
      if (!result.ok) {
        throw new Error(`Failed to delete comment: ${result.statusText}`);
      }
      setArticleInfo((prevInfo) => ({
        ...prevInfo,
        comments: prevInfo.comments.filter((comment) => comment.id !== commentId),
      }));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleEdit = (comment) => {
    setEditComment(comment);
  };

  const handleUpdateComment = async (text) => {
    try {
      const result = await fetch(`https://blog-cats-production.up.railway.app/api/comments/${editComment.id}/edit`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      if (!result.ok) {
        throw new Error(`Failed to update comment: ${result.statusText}`);
      }
      const updatedComment = await result.json();
      setArticleInfo((prevInfo) => ({
        ...prevInfo,
        comments: prevInfo.comments.map((comment) =>
          comment.id === updatedComment.id ? updatedComment : comment
        ),
      }));
      setEditComment(null);
    } catch (error) {
      console.error('Error updating comment:', error);
    }
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
      <CommentsList comments={articleInfo.comments} onDelete={handleDelete} onEdit={handleEdit} />
      {editComment && (
        <div className="mb-4">
          <textarea
            value={editComment.content}
            onChange={(e) => setEditComment({ ...editComment, content: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button onClick={() => handleUpdateComment(editComment.content)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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
