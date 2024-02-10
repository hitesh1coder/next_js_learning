import React from "react";

const Hero = ({ content }) => {
  console.log(content);
  return (
    <div className="w-full h-screen flex items-center justify-center text-6xl">
      {content} ☺️
    </div>
  );
};

export default Hero;
