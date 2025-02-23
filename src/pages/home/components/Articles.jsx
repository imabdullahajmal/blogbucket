import React from "react";
import ArticleCard from "../../../components/ArticleCard";
import { images } from "../../../constants";

const articleS = [
  {
    title: "The Future of UI/UX",
    description: "Explore the latest trends in UI/UX design...",
    image: "https://images.pexels.com/photos/4261712/pexels-photo-4261712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "John Doe",
  },
  {
    title: "React Performance Tips",
    description: "Improve your React app performance with these tips...",
    image: "https://images.pexels.com/photos/5550454/pexels-photo-5550454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Jane Smith",
  },
  {
    title: "Building Scalable Applications",
    description: "Best practices for creating scalable web applications...",
    image: "https://images.pexels.com/photos/5071339/pexels-photo-5071339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Alex Johnson",
  },
  {
    title: "React Performance Tips",
    description: "Improve your React app performance with these tips...",
    image: "https://images.pexels.com/photos/5550454/pexels-photo-5550454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Jane Smith",
  },{
    title: "The Future of UI/UX",
    description: "Explore the latest trends in UI/UX design...",
    image: "https://images.pexels.com/photos/4261712/pexels-photo-4261712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "John Doe",
  },
  {
    title: "React Performance Tips",
    description: "Improve your React app performance with these tips...",
    image: "https://images.pexels.com/photos/5550454/pexels-photo-5550454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Jane Smith",
  },
];

  

const Articles = () => {
  return (
    <section className="container mx-auto px-5 py-10">
      <h2 className="text-2xl font-bold text-slate-800 text-center">Latest Articles</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articleS.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
