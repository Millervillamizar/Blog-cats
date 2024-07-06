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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`/api/comments/${name}`);
        if (!result.ok) {
          throw new Error(`Failed to fetch comments: ${result.statusText}`);
        }
        const body = await result.json();
        setArticleInfo((prevInfo) => ({ ...prevInfo, comments: body }));
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchData();
  }, [name]);

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
      <CommentsList comments={articleInfo.comments} />
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

