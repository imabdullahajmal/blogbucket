import React from "react";

const ArticleCard = ({ title, description, image, author }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform hover:scale-105">
      {/* Article Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        <p className="text-sm text-slate-600 mt-2 line-clamp-2">{description}</p>

        {/* Author */}
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <span>By {author}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
