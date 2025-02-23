import { Button } from "@mui/material";
import React from "react";
import { images } from "../../../constants";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  const popularTags = ["Design", "UX", "UI", "Development"];

  return (
    <section className="container mx-auto flex flex-col-reverse px-5 py-10 lg:flex-row lg:items-center">
      {/* Left Content */}
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-bold text-3xl text-center text-slate-800 md:text-5xl lg:text-left lg:max-w-[500px]">
          Read the most interesting articles
        </h1>
        <p className="text-slate-600 mt-4 text-center md:text-xl lg:text-left lg:max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus
          provident dicta laboriosam optio delectus. Nihil a porro enim voluptates!
        </p>

        {/* Search Bar */}
        <div className="flex flex-col lg:flex-row items-center gap-4 mt-8 w-full">
          {/* Input Wrapper */}
          <div className="relative flex items-center w-full max-w-md">
            <AiOutlineSearch className="absolute left-3 text-gray-500 text-xl" />
            <input
              type="text"
              className="p-3 pl-10 border border-slate-400 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search articles..."
            />
          </div>

          {/* Search Button */}
          <Button
            variant="contained"
            sx={{
              whiteSpace: "nowrap",
              height: "48px",
              padding: "0 20px",
              width: { xs: "100%", lg: "auto" }, // Full width on mobile, auto on large screens
            }}
          >
            Search
          </Button>
        </div>

        {/* Popular Tags */}
        <div className="mt-6">
          <span className="font-semibold text-slate-700">Popular Tags:</span>
          <ul className="flex gap-3 mt-2 text-sm text-blue-600 font-medium">
            {popularTags.map((tag, index) => (
              <li key={index} className="cursor-pointer hover:underline">{tag}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hero Image - Hidden on small screens, visible on large */}
      <div className="hidden lg:block lg:w-1/2">
        <img src={images.heroimg} alt="Users reading articles" className="w-full max-w-lg mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
