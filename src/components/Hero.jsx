const Hero = ({ content }) => {
  return (
    <div className="w-full h-full  flex flex-col items-center justify-center">
      <h1 className=" text-6xl">{content} ☺️</h1>
    </div>
  );
};

export default Hero;
