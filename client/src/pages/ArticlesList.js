import React from "react";
import articleContent from "./article-content";

// Components
import Articles from "../components/Articles";

const ArticlesList = () => {
  return (
    <div className="bg-cat-prints bg-cover bg-fixed mb-40 min-h-screen">
      <div className="container mx-auto py-6">
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900 text-center'>
          Artículos
        </h1>
        <div className='flex flex-wrap -m-4'>
          <Articles articles={articleContent} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
